import React from 'react';
import { StyleSheet, View, Button, Image, StatusBar } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import DrawerButton from '../router/DrawerButton'
import {List} from '../list/list.js'

export class Camera extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraRollPermission: null,
            photo: null
        }
    };

    static navigationOptions = {
        title: 'Camera',
        //drawerIcon: <Icon/>,
        header: null,
        //title: 'Camera',
        //headerLeft: () => <DrawerButton/>,
    };

    async componentWillMount() {
        // カメラロールに対するPermissionを許可
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraRollPermission: status === 'granted' });
    }

    static PhotoImg = { uri: this.photo};

    render() {
        let { hasCameraRollPermission, photo } = this.state;
        console.log(this.state);
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.button}>
                    <View style={styles.leftbutton}>
                        <DrawerButton dest={'DrawerHome'}/>
                    </View>
                    <View style={styles.space}></View>
                    <View style={styles.rightbutton}>
                    </View>
                </View>
                <View style={styles.bubble}>  
                    <View style={styles.container}>
                        {hasCameraRollPermission && photo && 
                        <Image style={styles.image} source={{ uri: photo.uri }} />}
                        <Button style={styles.button}
                                title={"open Image Picker."}
                                onPress={async () => {
                                // Image Pickerを起動する
                                let result = await ImagePicker.launchImageLibraryAsync();
                                console.log(result);
                                this.setState({ photo: result });
                                }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export class OptCamera extends React.Component{
    static navigationOptions = {
        header: null,
        //title: 'OptCamera',
        //headerLeft: () => <DrawerButton/>,
    };
    render() {
        return (
            <View style={styles.container}>
            <StatusBar hidden={true}/>
                <View style={styles.button}>
                    <View style={styles.leftbutton}>
                        <DrawerButton dest={'DrawerHome'}/>
                    </View>
                    <View style={styles.space}></View>
                    <View style={styles.rightbutton}>
                        <DrawerButton dest={'StackCamera'}/>
                    </View>
                </View>
                <View style={styles.bubble}>  
                    <List texts="aiueo"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 9,
    },
    button: {
      flex: 1,
      backgroundColor: 'blue',
      flexDirection: 'row'
    },
    leftbutton: {
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
      backgroundColor: 'green',
    },
});