import React from 'react';
import { Alert, StyleSheet, View, Button, Image, StatusBar, Text, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import {List} from '../list/list.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export class CameraView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            node: [],
            pictures: null,
        }
    }

    static _changeCOlor=() => {

    }

    _setPhoto = (Photo) => {
        this.setState({photo: Photo});
        this.setState({key: Date.now()});
    }

    render() {
        return (
          <View style={styles.container}>
    
            {/*ヘッダーエリア*/}
            <View style={styles.button}>
    
              {/*左ボタン*/}
              <View style={styles.leftbutton}>
              </View>
    
              {/*中央空白*/}
              <View style={styles.space}></View>
    
              {/*右ボタン*/}
              <View style={styles.rightbutton}>
              </View>
    
            </View>
    
            {/*フィールドエリア*/}
            <View style={styles.table}>
    
                {/*タブエリア*/}
                <ScrollableTabView
                    tabBarPosition={"top"}
                    onScroll={this._changeCOlor}
                    tabBarBackgroundColor={""}
                >
    
                    {/*Picture*/}
                    <Pictures tabLabel='写真' setPhoto={this.state.pictures}/>
                    {/*Option*/}
                    <Option tabLabel='設定' Photo={this._setPhoto.bind(this)} key={this.state.key}/>
                    {/*test*/}
                    <Test tabLabel='test'/>
                </ScrollableTabView>
            </View>
        </View>
        );
      }
}

export class Pictures extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photo: this.props.setPhoto,
        }
    };

    static navigationOptions = {
        title: 'Camera',
        //drawerIcon: <Icon/>,
        header: null,
        //title: 'Camera',
        //headerLeft: () => <DrawerButton/>,
    };
    
    render() {
        let photo = this.state.photo;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.table}>  
                    <View style={styles.container} ref={(r) => width = r}>
                        {(photo && 
                        <Image style={styles.image} source={{ uri: photo }}/>)}
                        <TouchableOpacity style={styles.button}
                                onPress={async () => {
                                    // Image Pickerを起動する
                                    let result = await ImagePicker.launchImageLibraryAsync();
                                    if (!result.cancelled) {
                                        this.setState({ photo: result.uri });
                                    }
                                }}
                                onLongPress={() => {Alert.alert('長すぎ　ヽ(`Д´)ﾉﾌﾟﾝﾌﾟﾝ')}}
                        >
                            <Text style={{fontSize: 50}}>{"((((；ﾟДﾟ))))ｶﾞｸｶﾞｸﾌﾞﾙﾌﾞﾙ"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export class Option extends React.Component{

    /*STATE
    **hasCameraRollPermission : カメラロールに対するPermission
    **photo : 選択写真
    */
    constructor(){
        super();
        this.state = {
            photo: null,
        }
    };

    //ヘッダー設定
    static navigationOptions = {
        header: null,
        //title: 'OptCamera',
        //headerLeft: () => <DrawerButton/>,
    };

    _selectPhoto = () => {
        this._camera();
        this.props.Photo(this.state.photo);

    }

    _camera = async() => {
        let result = await ImagePicker.launchImageLibraryAsync();
        this.setState({photo: result});
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar hidden={true}/>
                
                <View style={styles.bubble}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <List Texts="選択画像ー＞" Title="select" onPress={() => this._selectPhoto()}/>
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

let width;


callfunc = () => {
    return <CameraView/>
}

class Test extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Button title='国士無双' onPress={callfunc}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    image: {

        width: width,
        height: 180,
        justifyContent: 'center',
    },
    button: {
      flex: 1,
      flexDirection: 'row'
    },
    leftbutton: {
      flex: 1,
    },
    space: {
      flex: 2,
    },
    rightbutton: {
      flex: 1,
    },
    table: {
      flex: 9,
    },
});