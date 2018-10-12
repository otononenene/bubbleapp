import React, { Component } from 'react';
import {  ScrollView, StyleSheet,Picker } from 'react-native';
import { Constants } from 'expo';
// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5
import { ActivityIndicator, Text, View  } from 'react-native';
export  class Weather extends Component {
//state = { movies: [] };
constructor(props) {
    super(props)
    this.state = {placeName: null, weather: null, temperature: null, loading: false}
    //
    this.Places = [{name: '札幌', id: 2128295}, {name: '東京', id: 1850147},
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
                                 temperature: json.main.temp, loading: false}))
    })
    .catch((response) => {
      this.setState({loading: false})
      console.log('** error **', response)
    })
  }
  render() {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>
            {this.state.place ? this.state.place + 'の天気' : '天気情報'}
        </Text>
        <Text>{this.state.loading?this.state.weather:'null'}</Text>
        <Text>{this.state.loading?this.state.temperature:'null'}</Text>
        <Picker style={[styles.picker]} 
            itemStyles={styles.pickerItem}
            onValueChange={(itemValue)=>{selectPlace(itemValue)}  }

        >
                {this.Places.map((place, ix) => <Picker.Item key={ix} value={ix} label={place.name} />)}       
            </Picker>
    </View>
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
    }
})