import React from 'react';
import { StyleSheet, View, Button, Image, StatusBar, Text } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import DrawerButton from '../router/DrawerButton';
import {List} from '../list/list.js';
import PropTypes from 'prop-types';

const propTypes = {
    ImgSource: PropTypes.func,
}

export class Check extends React.Component{
    render(){
        if(this.props.photo == null){
            return(
                <View style={styles.container}>
                    <Text>null</Text>
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <Text>{this.props.photo.uri}</Text>
            </View>
        );
    }
}

export class OptCamera extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraRollPermission: null,
            photo: null,
        }
    };

    static navigationOptions = {
        header: null,
        //title: 'OptCamera',
        //headerLeft: () => <DrawerButton/>,
    };

    callBack(PhotoImg){
        this.setState({photo: PhotoImg});
    }

    _getImg = () => {
        // Image Pickerを起動する　画像選択画面
        let result = ImagePicker.launchImageLibraryAsync();
        this.setState({ photo: result });
    }

    async componentWillMount() {
        // カメラロールに対するPermissionを許可
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraRollPermission: status === 'granted' });
    }

    render() {
        <Camera ImgSource={(PhotoImg) => {this.callBack(PhotoImg); }}></Camera>
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
                    <List Texts="選択画像ー＞" Title="select" onPress={this._getImg}/>
                    <List Texts="意味のない" Title="項目"/>
                    <Check photo={this.state.photo}/>
                </View>
            </View>
        );
    }
}

export class Camera extends React.Component{
    constructor(){
        super();
    };

    static navigationOptions = {
        title: 'Camera',
        //drawerIcon: <Icon/>,
        header: null,
        //title: 'Camera',
        //headerLeft: () => <DrawerButton/>,
    };

    Imgreturn(Img){
        return this.props.ImgSource(Img);
    }

    

    render() {
        //let { hasCameraRollPermission, photo } = this.state;
        //console.log(this.state);
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
                        {this.props.photo && 
                        <Image style={styles.image} source={{ uri: this.props.photo.uri }} />}
                        <Button style={styles.button}
                                title={"open Image Picker."}
                                onPress={async () => {
                                // Image Pickerを起動する
                                let result = await ImagePicker.launchImageLibraryAsync();
                                this.Imgreturn(result);
                                }}
                        />
                    </View>
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

Camera.propTypes = propTypes;