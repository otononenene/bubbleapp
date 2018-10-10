import React,{Component} from 'react';
import {StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            x1: 0,
            x2: 0,
        };
    }

    static navigationOptions = {
        title: 'Caluculater',
        headerStyle: {
            backgroundColor: 'red'
        },
        headerRight: (
            <Button
                title="Option"
                onPress={() => this.props.navigation.navigate('OptCaluculater')}
            />
        ),
    };

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.result}>

            </View>
            <View style={styles.col}>
                <View style={styles.row}>
                    <View>

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
    static navigationOptions = {
        headerMode: 'float',
        title: 'OptCaluculater',
    };

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.result}>

            </View>
            <View style={styles.col}>
                <View style={styles.row}>
                    <View>

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

export const styles = StyleSheet.create({
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
    result: {
        flex: 1,
    }
});

export default Calculator;