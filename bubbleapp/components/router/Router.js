import React from 'react';
import {Button, View, Text} from 'react-native';
import {createStackNavigator, createDrawerNavigator, DrawerItems, NavigationActions} from 'react-navigation';
import Calculator, { Calculater, OptCalculater } from '../calculator/calculator.js';
import {Camera, OptCamera} from '../camera/camera.js';
import {Watch, OptWatch} from '../watch/watch.js';
import {Weather, OptWeather} from '../weather/weather.js';
import {Calendar, OptCalendar} from '../calendar/calendar.js';
import Home from '../home/home.js';
import {Texts, OptTexts} from '../texts/texts.js';

const RouterStack = createStackNavigator(
    {   
        StackHome: () => <Home/>,
        StackCalculater: () => <Calculater/>,
        OptCalculater: () => <OptCalculater/>,
        StackCamera: {
            screen: Camera,
            navigationOptions: () => ({
                title: 'Camera',
            }),
            headerRight: (
                <Button
                    title="Option"
                    onPress={() => this.props.navigation.navigate('OptCamera')}
                />
            ),
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
            headerRight: (
                <Button
                    title="Option"
                    onPress={() => this.props.navigation.navigate('OptWatch')}
                />
            ),
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
            headerRight: (
                <Button
                    title="Option"
                    onPress={() => this.props.navigation.navigate('OptWeather')}
                />
            ),
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
            headerRight: (
                <Button
                    title="Option"
                    onPress={() => this.props.navigation.navigate('OptCalendar')}
                />
            ),
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
            headerRight: (
                <Button
                    title="Option"
                    onPress={() => this.props.navigation.navigate('OptTexts')}
                />
            ),
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
    DrawerCalculater: () => <Calculator/>,
    DrawerCamera: () => <Camera/>,
    DrawerWatch: () => <Watch/>,
    DrawerWeather: () => <Weather/>,
    DrawertCalender: () => <Calendar/>,
    },{
        drawerWidth: 300,
        contentComponent: props => (
            <SideBar {...props}>
                <View style={{padding:16,}}>
                    <Text style={{fontSize:24}}>DRAWER TEST</Text>
                </View>
                <DrawerItems {...props} />
            </SideBar>
        ),
    }
);

export default RouterStack;