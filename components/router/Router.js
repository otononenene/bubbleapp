import React from 'react';
import {View, Text, StyleSheet, SideBar, ScrollView} from 'react-native';
import {createDrawerNavigator, } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Calculator} from '../calculator/calculator.js';
import {CameraView} from '../camera/camera.js';
import {Watch} from '../watch/watch.js';
import {Weather} from '../weather/weather.js';
import {Calendars} from '../calendar/calendar.js';
import Home from '../home/home.js';
import {Texts} from '../texts/texts.js';

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
    }
);

const styles=StyleSheet.create({
    Menu: {
        marginLeft: 20,
      },
});

export default Drawer;