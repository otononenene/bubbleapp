import {} from 'react-native-calendars';
import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {NaviButton} from '../router/Headerbuttons.js';

export class Calendar extends React.Component{
    static navigationOptions = {
        header: null,
        //title: 'Calendar',
        //headerLeft: () => <DrawerButton/>,
    };
    render(){
        return (
            <View style={styles.container}>
            <StatusBar hidden={true}/>
              <View style={styles.button}>
                <View style={styles.leftbutton}>
                  
                </View>
                <View style={styles.space}></View>
                <View style={styles.rightbutton}>
                  
                </View>
              </View>
              <View style={styles.bubble}>
                <ScrollableTabView 
                    key={'Camera'}
                    locked={true}
                    style={styles.tab}
                    tabBarActiveTextColor={darkTheme.tabBarUnderlineColor}
                    tabBarUnderlineStyle={{
                        backgroundColor: darkTheme.tabBarUnderlineColor
                    }}
                    tabBarBackgroundColor={darkTheme.tabInactiveBackground}
                    tabBarInactiveTextColor={darkTheme.tabBarUnderlineColor}
                    renderTabBar={this.renderTabBar}>
                
                </ScrollableTabView>
                <StoryListContainer
                    route={'MainStory'}
                    navigation={this.props.navigation}
                    tabLabel={'Calendar'}
                    category={'calendar'}
                />
                <StoryListContainer
                    route={'MainStory'}
                    navigation={this.props.navigation}
                    tabLabel={'未定'}
                    category={'noitems'}
                />
                <View style={styles.table}>
                    
                </View>
              </View>
            </View>
        );
    }
}

export class OptCalendar extends React.Component{
    static navigationOptions = {
        header: null,
        //title: 'OptCalendar',
        //headerLeft: () => <DrawerButton/>,
    };
    render() {
        return (
            <View style={styles.container}>
            <StatusBar hidden={true}/>
              <View style={styles.button}>
                <View style={styles.leftbutton}>
                  
                </View>
                <View style={styles.space}></View>
                <View style={styles.rightbutton}>
                    <NaviButton Navi={'Calender'}/>
                </View>
              </View>
              <View style={styles.bubble}>  
                <View style={styles.table}>
                    
                </View>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 9,
    },
    button: {
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
    rightbutton: {
      flex: 1,
      backgroundColor: 'pink',
    },
    bubble: {
      flex: 9,
      backgroundColor: 'red',
    },
    tab: {
        backgroundColor: 'black',
    }
  });