import React from 'react';
import { Animated, AppRegistry, StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
const Myon = './jpeg/Myon.jpg';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <View style={styles.newbutton}></View>
          <View style={styles.space}></View>
          <View style={styles.optbutton}></View>
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
    marginTop: 20,
    flex: 0.75,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  newbutton: {
    flex: 1,
    backgroundColor: 'pink',
  },
  space: {
    flex: 2,
  },
  optbutton: {
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
  ImgMyon:{
    flex: 1,
  },
  samples: {
    textAlign: 'center',
    fontSize: 150,
    color: 'red'
  },
});
