import React, { Component ,ActivityIndicator} from 'react';
import {  ScrollView, StyleSheet,Picker } from 'react-native';
import {  Text, View  } from 'react-native';
export   class Weather extends Component {
//state = { movies: [] };
constructor(props) {
    super(props)
    this.state = {placeName: null, weather: null, temperature: null, loading: false}
    //
    this.Places = [{name:'選択してください',id:''},{name: '札幌', id: 2128295}, {name: '東京', id: 1850147},
                   {name: '大阪', id: 1853909}, {name: '沖縄', id: 1894616},
                  {name:'福岡',id:1863967}]
    this.OpenWeatherMapKey = "a7d4d9333ffb3e2e2ca1affd07dd9277"
}
selectPlace(index) {
    if (index > 0) {
      const place = this.Places[index - 1]
      this.setState({placeName: place.name, weather: null, temperature: null, loading: true})
      this.getWeather(place.id)
    }
  }
  getWeather(id) {
    const delay = (mSec) => new Promise((resolve) => setTimeout(resolve, mSec))

    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${this.OpenWeatherMapKey}&id=${
          id}&lang=ja&units=metric`)
    .then((response) => response.json())
    .then((json) => {
      delay(700)
      .then(() => this.setState({weather: json.weather[0].description,
                                 temperature: json.main.temp, loading: true}))
    })
    .catch((response) => {
      this.setState({loading: false})
      console.log('** error **', response)
    })
  }
    
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }

  render() {
    if(this.state.loading){
      return(
        <View style={styles.container2}>
        <Text style={styles.text}>{this.state.placeName}</Text>
        <Text style={styles.text}>{this.state.weather}</Text>
        <Text style={styles.text}>{this.state.temperature}</Text>
        </View>
      )
    }
    else{
    return (
    <View style={styles.container}>
        <Text style={styles.title}>
            {this.state.place ? this.state.place + 'の天気' : '天気情報'}
        </Text>
        <Picker style={[styles.picker]} 
            itemStyles={styles.pickerItem}
            onValueChange={(selectItem)=>{this.selectPlace(selectItem+1)}  }
            selectedValue={this.Places.Name}
        >
                {this.Places.map((place, ix) => <Picker.Item key={ix} value={ix} label={place.name} />)}       
        </Picker>
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