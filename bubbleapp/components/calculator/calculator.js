import React,{Component} from 'react';
import {StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {result: null};
      }

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.result}>

            </View>
            <View style={styles.col}>
                <View style={styles.row}>
                    <View>
                        <Button>
                    
                        </Button>
                    </View>
                </View>
            <View style={styles.row}>
            
            </View>
            <View style={styles.row}>
            
            </View>  
          </View>
        </View>
      );
    }
}

export class OptCalculator extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.result}>

            </View>
            <View style={styles.col}>
                <View style={styles.row}>
                    <View>
                        <Button>
                    
                        </Button>
                    </View>
                </View>
            <View style={styles.row}>
            
            </View>
            <View style={styles.row}>
            
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
    col: {
        flexDirection: 'column',
        flex: 1,
    },
    row: {
        flexDirection: 'column',
        flex: 1/3,
    },
});