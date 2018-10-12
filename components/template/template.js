import React from 'React';
import {View, Text, StyleSheet, } from 'react-native'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
  
    static navigationOptions = ({ navigation }) => {
      return {
         header: () => null
      } 
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.button}>
            <View style={styles.reftbutton}>
            </View>
            <View style={styles.space}></View>
            <View style={styles.rightbutton}>
            </View>
          </View>
          <View style={styles.bubble}>  
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
});
  
  