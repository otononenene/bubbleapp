import React, { Component ,ActivityIndicator} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {  Button,ScrollView, StyleSheet,Picker } from 'react-native';
import {Prefectures} from './Prefectures';
import {  Text, View  } from 'react-native';
import {API_key} from './WeatherAPIKey';
import {WeatherView,WeatherOption} from './subWeather'
import BackButton from '../router/BackButton'
export class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: Prefectures[1].name,
            weather: null,
            temperature: null,
            places:Prefectures,
            ix:1
        },
        this.OpenWeatherMapKey = API_key 
    }

    selectPlace(index) {
        if (index > 0) {
           this.setState({
                placeName: this.state.places[index].name,
                weather: null,
                temperature: null,
                loading: true,
                ix:index
            })
            this.getWeather(this.state.places[index].id)
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
      return(
        <View style={{flex:9}}>
         <View style={styles.button}>
                <View style={styles.leftbutton}>
                    <BackButton/>
                </View>
                <View style={styles.space}></View>
                <View style={styles.rightbutton}>
                    {(()=>{if(this.state.addFlag === true){
                        return (
                            <AddNode
                                style={styles.Nodestyle}
                                Title='追加'
                                onPress={()=>{}}
                                onLongPress={()=>{}}
                                NodeName='text'
                                NodeOption={this.state.node.option}
                            />
                        );}
                        return;
                    })()}
                </View>
            </View>
        
            <ScrollableTabView
            tabBarPosition={"top"}
            onScroll={
                this._changeCOlor
            }
            tabBarBackgroundColor={""}
            style={{flex:9.5}}
            >
                <WeatherView tabLabel="天気予報"
                    placeName={this.state.placeName}
                    weather={this.state.weather}
                    temperature={this.state.temperature}
                    loading={this.state.loading}
                    ix={this.state.ix}
                />
                <WeatherOption tabLabel="設定"
                    placeName={this.state.placeName}
                    weather={this.state.weather}
                    temperature={this.state.temperature}
                    loading={this.state.loading}
                    ix={this.state.ix}
                    selectPlace={this.selectPlace.bind(this)}
                    getWeather={this.getWeather.bind(this)}
                />
            </ScrollableTabView>
        </View>
      )
      }

}

export class OptWeather extends React.Component{
    render() {
        return (
          <View/>
        );
    }
}



export const styles=StyleSheet.create({

    container:{

        flex:1,

        flexDirection:'column',

        alignItems:'center',

        padding:20,

        backgroundColor:'white'

    },button: {
      marginTop: 20,
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row'
    },
    leftbutton: {
      flex: 1,
      backgroundColor: 'pink',
    },
    space: {
      flex: 2,
    },
    result:{
        flex:1.4,
    },
    resultContent:{
        color:'red',
        fontSize:100
    },
    rightbutton: {
      flex: 1,
      backgroundColor: 'pink',
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