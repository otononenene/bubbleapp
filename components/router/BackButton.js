import {withNavigation} from 'react-navigation';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class BackButton extends React.Component{
    render(){
        return(
            <View>
                <Icon
                    name="bars"
                    size={45}
                    style={styles.Menu}
                    onPress={()=> {this.props.navigation.navigate('DrawerHome')}}
                />
            </View>
    )}
}

export default withNavigation(BackButton);

const styles=StyleSheet.create({
    Menu: {
        marginLeft: 20,
      },
});