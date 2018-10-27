import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export class List extends React.Component{
    static _ChangeText = (value) => {
        this.props = ({value});
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.TextsArea}>
                    <Text style={styles.InTexts}>{this.props.Texts}</Text>
                </View>
                <View style={styles.SelectArea}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Text style={styles.InTexts}>{this.props.Title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

 

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: "center",
        borderWidth: 2,
        padding: 10,
        margin: 5,
    },
    TextsArea: {
        borderColor: '#AAA',

    },
    InTexts: {
        fontSize: 30,
        textAlign: "center",
    },
    SelectArea: {
        flex: 5,

    },
});