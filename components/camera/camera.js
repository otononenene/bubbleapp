import React from 'react';
import { StyleSheet, View, Button, Image, StatusBar, Text, ScrollView } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import DrawerButton from '../router/DrawerButton';
import {List} from '../list/list.js';

export class OptCamera extends React.Component{

    /*STATE
    **hasCameraRollPermission : カメラロールに対するPermission
    **photo : 選択写真
    */
    constructor(){
        super();
        this.state = {
            hasCameraRollPermission: null,
            photo: [],
        }
    };

    //ヘッダー設定
    static navigationOptions = {
        header: null,
        //title: 'OptCamera',
        //headerLeft: () => <DrawerButton/>,
    };

    // カメラロールに対するPermissionを許可
    async componentWillMount() {
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
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <List Texts="選択画像ー＞" Title="select" onPress={(text) => this.setState({photo: text})}/>
                        <List Texts="意味のない" Title="項目A"/>
                        <List Texts="意味のない" Title="項目B"/>
                        <List Texts="意味のない" Title="項目C"/>
                        <List Texts="意味のない" Title="項目A"/>
                        <List Texts="意味のない" Title="項目B"/>
                        <List Texts="意味のない" Title="項目C"/>
                        <List Texts="意味のない" Title="項目D"/>
                    </ScrollView>
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