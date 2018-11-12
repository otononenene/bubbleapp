import React from 'react';
import {View, StyleSheet} from 'react-native'

export class MiniCmaera extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            node: [],

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <></>
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
});