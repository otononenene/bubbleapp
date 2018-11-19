import {Calendar} from 'react-native-calendars';
import React from 'react';
import {Text, View, StyleSheet, StatusBar, ScrollView, ImageBackground} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {NaviButton} from '../router/Headerbuttons.js';
import {List} from '../list/list.js';

const testImg ='./Murgatroyd.gif';

export class Calendars extends React.Component{
    static navigationOptions = {
        header: null,
        //title: 'Calendar',
        //headerLeft: () => <DrawerButton/>,
    };

    static _changeCOlor=() => {

    }
    render(){
        return (
            <View style={styles.container}>
            <StatusBar hidden={true}/>
            
            <ImageBackground
                  source={require(testImg)}
                  style={{width: '100%', height: '100%'}}>

              <View style={styles.button}>
                <View style={styles.leftbutton}>
                  
                </View>
                <View style={styles.space}></View>
                <View style={styles.rightbutton}>
                  
                </View>
              </View>
              <View style={styles.bubble}>
                <ScrollableTabView
                    tabBarPosition={"top"}
                    onScroll={this._changeCOlor}
                    tabBarBackgroundColor={""}
                    >
                    <CalendarView tabLabel="CalendarView"/>
                    <Option tabLabel="Option" />
                    
                </ScrollableTabView>
              <View style={styles.table}>
                    
                </View>
              </View>
            </ImageBackground>

            </View>
        );
    }
}

class CalendarView extends React.Component{
  static navigationOptions = {
      header: null,
      //title: 'OptCalendar',
      //headerLeft: () => <DrawerButton/>,
  };

  render() {
      return (
          <View style={styles.container}>
          
            <View style={styles.calendarArea}>  
              
                <ImageBackground
                  source={{uri: testImg}}
                  style={{width: '100%', height: '100%'}}>
                  <Calendar 
                    style={styles.calendar}
                    theme={{
                      calendarBackground: 'transparent'
                    }}
                  />  
                </ImageBackground>
              
            </View>
          </View>
      );
  }
}

class Option extends React.Component{
    static navigationOptions = {
        header: null,
        //title: 'OptCalendar',
        //headerLeft: () => <DrawerButton/>,
    };
    render() {
        return (
            <View style={styles.container}>
            
              <View style={styles.bubble}>  
                <ScrollView showsVerticalScrollIndicator={false}>
                    <List Texts="意味のない" Title="項目A"/>
                    <List Texts="意味のない" Title="項目B"/>
                    <List Texts="意味のない" Title="項目C"/>
                    <List Texts="意味のない" Title="項目A"/>
                    <List Texts="意味のない" Title="項目B"/>
                    <List Texts="意味のない" Title="項目C"/>
                    <List Texts="意味のない" Title="項目D"/>
                </ScrollView>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,

      justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 9,
    },
    button: {
      flex: 1,
      flexDirection: 'row'
    },
    leftbutton: {
      flex: 1,
    },
    space: {
      flex: 2,
    },
    rightbutton: {
      flex: 1,
    },
    bubble: {
      flex: 9,
    },
    tab: {
    },
    calendarArea: {
      flex: 1,
    },
    calendar: {
      borderWidth: 1,
      backgroundColor: 'transparent',
    }
  });