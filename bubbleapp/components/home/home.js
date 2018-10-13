import React from 'react';
import {} from 'react-navigation';
import {StyleSheet, Button, Text, View, ImageBackground, StatusBar } from 'react-native';
import {DrawerButton} from '../router/Router.js'
const Myon = './pictures/Myon.jpg';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
    //title: 'Home',
    //headerLeft: () => <DrawerButton/>,
  };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        <View style={styles.button}>
          <View style={styles.reftbutton}>
            <DrawerButton/>
          </View>
          <View style={styles.space}></View>
          <View style={styles.rightbutton}>
            <DrawerButton/>
          </View>
        </View>
        <View style={styles.bubble}>  
          <View style={styles.table}>
            <ImageBackground source={require (Myon)} style={styles.ImgMyon}>  
              <Text style={styles.samples}>SAMPLE</Text>
            </ImageBackground>  
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  button: {
    flex: 0.95,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  reftbutton: {
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
  table: {
    flex: 1,
    width: '100%',
    backgroundColor: '#30603080',
  },
  nodemin:{
    flex: 1,
    backgroundColor: '#30306080',
  },
  nodemid: {
    flex: 1,
    backgroundColor: '#60303080',
  },
  nodemax: {
    flex: 1,
  },
  ImgMeiling: {
    flex: 1,  
  },
  ImgMyon: {
    flex: 1,
  },
  samples: {
    textAlign: 'center',
    fontSize: 150,
    color: 'red'
  },
  TxtMenu: {
    textAlign: 'justify',
    fontSize: 30,
  },
});
