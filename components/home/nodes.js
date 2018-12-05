import React from 'react';
import {Alert, View, StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native'

export class Node extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>

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
    Viewer: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    }
});