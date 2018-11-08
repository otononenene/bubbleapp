import React from 'react';
import {View, Text, StyleSheet, SideBar, ScrollView} from 'react-native';
import {createStackNavigator, createDrawerNavigator, DrawerItems, NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Calculator, OptCalculator } from '../calculator/calculator.js';
import {Camera, OptCamera} from '../camera/camera.js';
import {Watch, OptWatch} from '../watch/watch.js';
import {Weather, OptWeather} from '../weather/weather.js';
import {Calendar, OptCalendar} from '../calendar/calendar.js';
import Home from '../home/home.js';
import {Texts, OptTexts} from '../texts/texts.js';

export class DrawerButton extends React.Component{
    render(){
        return(
            <View>
                <Icon
                    name="bars"
                    size={45}
                    style={styles.Menu}
                    onPress={()=> this.props.navigation.navigate('StackCalculator')}
                />
            </View>
    )}
}

const HomeStack = createStackNavigator(
    {   
        StackHome: {screen: Home},
    },{
        initialRouteName: "StackHome",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

const CalculatorStack = createStackNavigator(
    {   
        StackCalculator: {screen: Calculator},
        OptCalculator: {screen: OptCalculator},
    },{
        initialRouteName: "StackCalculator",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
const CameraStack = createStackNavigator(
    {
        StackCamera: {screen: Camera},
        OptCamera: {screen: OptCamera},
    },{
        initialRouteName: "OptCamera",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
const WatchStack = createStackNavigator(
    {
        StackWatch: {screen: Watch},
        OptWatch: {screen: OptWatch},
    },{
        initialRouteName: "StackWatch",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
const WeatherStack = createStackNavigator(
    {
        StackWeather: {screen: Weather},
        OptWeather: {screen: OptWeather},
    },{
        initialRouteName: "StackWeather",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
const CalendarStack = createStackNavigator(
    {
        StackCalendar: {screen: Calendar},
        OptCalendar: {screen: OptCalendar},
    },{
        initialRouteName: "StackCalendar",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
const TextsStack = createStackNavigator(
    {
        StackTexts: {screen: Texts},
        OptTexts: {screen: OptTexts},
    },{
        initialRouteName: "StackTexts",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }    
);

export const Drawer = createDrawerNavigator({
    DrawerHome: {screen: Home},
    DrawerCalculator: {screen: CalculatorStack},
    DrawerCamera: {screen: CameraStack},
    DrawerWatch: {screen: WatchStack},
    DrawerWeather: {screen: WeatherStack},
    DrawertCalender: {screen: CalendarStack},
    DrawertTexts: {screen: TextsStack},
    },{
        drawerWidth: 300,
        //contentComponent: <Menu/>,
    }
);

const styles=StyleSheet.create({
    Menu: {
        marginLeft: 20,
      },
});

export default Drawer;