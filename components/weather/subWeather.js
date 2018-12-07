import React, { Component ,ActivityIndicator} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {  Button,ScrollView, StyleSheet,Picker } from 'react-native';
import {Prefectures} from './Prefectures';
import {  Text, View  } from 'react-native';
import {API_key} from './WeatherAPIKey';
import {styles} from './weather'

export class WeatherView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        },
        this.OpenWeatherMapKey = API_key
    }
    render(){
        return(
            <View style={styles.container2}>
             <Text style={styles.text}>{this.props.placeName}</Text>
             <Text style={styles.text}>{this.props.weather}</Text>
             <Text style={styles.text}>{this.props.temperature}</Text>
            </View>
        )
    }

}
export class WeatherOption extends Component{
    constructor(props) {
        super(props);
        this.state = {
            placeName: this.props.placeName,
            weather: this.props.weather,
            temperature: this.props.temperature,
            loading:this.props.loading,
            places:Prefectures,
            ix:this.props.ix

        },
        this.OpenWeatherMapKey = API_key
    }
    render(){
        return(
        <View style={styles.container}>

        <Text style={styles.title}>

            都道府県を選択してください

        </Text>

        <Picker style={[styles.picker]} 

            itemStyles={styles.pickerItem}

            onValueChange={(selectItem,selectedIndex)=>{
                this.props.selectPlace(selectedIndex)
                this.setState({
                    ix:selectedIndex
                })
            } 
            }

            selectedValue={this.state.places[this.state.ix].id}

        >

                {this.state.places.map((place, ix) => {
                    return(<Picker.Item key={ix} value={place.id} label={place.name} />)})
                }      

        </Picker>
        <Button
            title="選択"
            onPress={()=>this.props.getWeather(this.state.places[this.state.ix].id)}
        />
    </View>
        )
    }
}