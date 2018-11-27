import React from 'react';
import {View, Text, StyleSheet, SideBar, ScrollView, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Calculator} from '../calculator/calculator.js';
import {CameraView} from '../camera/camera.js';
import {Watch} from '../watch/watch.js';
import {Weather} from '../weather/weather.js';
import {Calendars} from '../calendar/calendar.js';
import Home from '../home/home.js';
import {Texts} from '../texts/texts.js';

export const _navigate = (node) => {
    switch(node.name){
        case 'calculator':
        return <Calculator state={node}/>
        case 'calendar':
        return <Calendars state={node}/>
        case 'camera':
        return <CameraView state={node}/>
        case 'texts':
        return <Texts state={node}/>
        case 'watch':
        return <Watch state={node}/>
        case 'Weather':
        return <Weather state={node}/>
    }
}


export const Drawer = createDrawerNavigator({
    DrawerHome: {screen: Home},
    DrawerCalculator: {screen: Calculator},
    DrawerCamera: {screen: CameraView},
    DrawerWatch: {screen: Watch},
    DrawerWeather: {screen: Weather},
    DrawertCalender: {screen: Calendars},
    DrawertTexts: {screen: Texts},
    },{
        drawerWidth: 300,
        //contentComponent: <Menu/>,
        drawerLockMode: 'locked-closed',
    }
);

const styles=StyleSheet.create({
    Menu: {
        marginLeft: 20,
      },
});

export default Drawer;