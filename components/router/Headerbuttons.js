import React from 'react'
import {NavigationActions, DrawerItems} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ScrollView>
                <View style={{padding:16,}}>
                    <Text style={{fontSize:24}}>DRAWER TEST</Text>
                </View>
                <DrawerItems {...props} />
            </ScrollView>
        );
    }
}

export class BackHome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Icon
                    name="bars"
                    size={45}
                    style={styles.Menu}
                    navigation = {this.props.navigation}
                    onPress={()=> this.props.navigation.navigate('Calclator')}
                />
            </View>
    )}
}

export class Add extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Icon
                    title='追加'
                    size={45}
                    style={styles.Menu}
                    navigation = {props.navigation}
                    onPress={()=> props.navigation.navigate('Home')}
                />
            </View>
    )}
}


export const NaviButton = (Navi) => {
    const navi = Navi;
    return(
        <View>
            <Icon
                name="bars"
                size={45}
                style={styles.Menu}
                //navigation = {this.props.navigation}
                onPress={()=> this.props.navigation.navigate(navi)}
            />
        </View>
    );
}

Menu.propTypes = {
    navigation: PropTypes.object
};

const styles=StyleSheet.create({
    Menu: {
        marginLeft: 20,
      },
});

