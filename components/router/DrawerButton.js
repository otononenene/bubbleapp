import {withNavigation} from 'react-navigation';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DrawerButton extends React.Component{
    render(){
        return(
            <View>
                <Icon
                    name="gg"
                    size={45}
                    style={styles.Menu}
                    onPress={()=> {this.props.navigation.toggleDrawer()}}
                />
            </View>
    )}
}

export default withNavigation(DrawerButton);

const styles=StyleSheet.create({
    Menu: {
        marginLeft: 20,
      },
});