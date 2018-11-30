import React, { Component ,ActivityIndicator} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {  Button,ScrollView, StyleSheet,Picker } from 'react-native';
import {Prefectures} from './Prefectures';
import {  Text, View  } from 'react-native';
import {API_key} from './WeatherAPIKey';
import {AddNode} from '../home/nodeview.js';
import BackButton from '../router/BackButton.js';
import {List} from '../list/list.js';

export class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: null,
            weather: null,
            temperature: null,
            loading: false
        },
        this.places = Prefectures 

        this.OpenWeatherMapKey = API_key
        this.place = this.places[0] 
    }

    selectPlace(index) {
        if (index > 0) {
            this.place = this.places[index - 1];
            this.setState({
                placeName: this.place.name,
                weather: null,
                temperature: null,
                loading: true
            })
            this.getWeather(this.place.id)
        }
    }

    getWeather(id) {
        const delay = (mSec) => new Promise((resolve) => setTimeout(resolve, mSec))
        fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${this.OpenWeatherMapKey}&id=${id}&lang=ja&units=metric`)

        .then((response) => response.json())

        .then((json) => {
            delay(700)
            .then(() => this.setState({
                weather: json.weather[0].description,
                temperature: json.main.temp,
                loading: true
            }))
        })

        .catch((response) => {
            this.setState({loading: false})
        })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        } 
    }

  render() {
    //選択した都道府県の天気予報を表示する画面
    if(this.state.loading){

      return(

        <View style={styles.container2}>

        <Text style={styles.text}>{this.state.placeName}</Text>

        <Text style={styles.text}>{this.state.weather}</Text>

        <Text style={styles.text}>{this.state.temperature}</Text>

        </View>

      )

    }
    //都道府県を選択する画面   

    else{

    return (

    <View style={styles.container}>

        <Text style={styles.title}>

            { '天気情報'}

        </Text>

        <Picker style={[styles.picker]} 

            itemStyles={styles.pickerItem}

            onValueChange={(selectItem)=>{this.selectPlace(selectItem+1)}  }

            selectedValue={this.place.id}

        >

                {this.places.map((place, ix) => <Picker.Item key={ix} value={ix} label={place.name} />)}       

        </Picker>
        <Button
            title="選択"
            onPress={()=>this.getWeather(this.place.id)}
        />
    </View>

        );

      }

    }

}

export class OptWeather extends React.Component{



    render() {



        return (



          <View/>



        );



    }



}

const styles=StyleSheet.create({

    container:{

        flex:1,

        flexDirection:'column',

        alignItems:'center',

        padding:20,

        backgroundColor:'white'

    },

    container2:{

        flex:1,

        flexDirection:'column',

        alignItems:'center',

        padding:20,

        backgroundColor:'white',

        justifyContent:'center'

    },

    title:{

        marginTop:20,

        fontSize:18,

        marginBottom:10,

        fontWeight:'bold'

    },

    picker:{

        width:200,

        backgroundColor:'#FFF'

    },

    pickerItem:{

        color:'blue'

    },

    text:{

        color:'blue',

        fontSize:20

    }

})