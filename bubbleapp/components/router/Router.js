import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Calculater, {OptCalculater} from '../calculator/calculator.js';
import {Camera, OptCamera} from '../camera/camera.js';
import {Watch, OptWatch} from '../watch/watch.js';
import {Weather, OptWeather} from '../weather/weather.js';
import {Calendar, OptCalendar} from '../calendar/calendar.js';
import Home from '../home/home.js';
import {Texts, OptTexts} from '../texts/texts.js';
import React from 'react';

export const RootStack = createStackNavigator({
    StackHome: {
        screen: Home,
        navigationOptions: () => ({
            title: 'Home',
            headerStyle: {
                backgroundColor: 'red'
            },
        }),
    },
    StackCalculater: {
        Screen: Calculater,
        navigationOptions: () => ({
            title: 'Caluculater',
            headerStyle: {
                backgroundColor: 'red'
            },
        }),
    },
    OptCalculater: {
        screen: OptCalculater,
        headerMode: 'float',
        navigationOptions: () => ({
            title: 'OptCaluculater',
        }),
    },
    StackCamera: {
        screen: Camera,
        navigationOptions: () => ({
            title: 'Camera',
        }),
    },
    OptCamera: {
        screen: OptCamera,
        navigationOptions: () => ({
            title: 'OptCamera',
        }),
    },
    StackWatch: {
        screen: Watch,
        navigationOptions: () => ({
            title: 'Watch',
        }),
    },
    OptWatch: {
        screen: OptWatch,
        navigationOptions: () => ({
            title: 'OptWatch',
        }),
    },
    StackWeather: {
        screen: Weather,
        navigationOptions: () => ({
            title: 'Weather',
        }),
    },
    OptWeather: {
        screen: OptWeather,
        navigationOptions: () => ({
            title: 'OptWeather',
        }),
    },
    StackCalendar: {
        screen: Calendar,
        navigationOptions: () => ({
            title: 'Calemdar',
        }),
    },
    OptCalendar: {
        screen: OptCalendar,
        navigationOptions: () => ({
            title: 'OptCalemdar',
        }),
    },
    StackTexts: {
        screen: Texts,
        navigationOptions: () => ({
            title: 'Calemdar',
        }),
    },
    OptTexts: {
        screen: OptTexts,
        navigationOptions: () => ({
            title: 'OptCalemdar',
        }),
    }
    },{
        initialRouteName: "StackHome",
    }    
);

export const Drawer = createDrawerNavigator({
    DrawerCalculater: {screen: Stack.StackCalculater},
    DrawerCamera: {screen: StackCamera},
    DrawerWatch: {screen: StackWatch},
    DrawerWeather: {screen: StackWeather},
    DrawertCalender: {screen: StackCalender},
    },{
        drawerWidth: 300,
        contentComponent: props => (
            <ScrollView>
                <View style={{padding:16,}}>
                    <Text style={{fontSize:24}}>DRAWER TEST</Text>
                </View>
                <DrawerItems {...props} />
            </ScrollView>
        ),
    }
);

export default class App extends React.Component {
    render() {
    return <RootStack />;
    }
}