import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export class ListUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            node: [],
            
        }
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
                    <ListView tabLabel='ToDo List' />
                    {/*Option*/}
                    <Option tabLabel='設定' />
                </ScrollableTabView>
            </View>
        </View>
        );
      }
}

export class ListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
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
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.table}>  
                    
                </View>
            </View>
        );
    }
}

export class Option extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    };

    //ヘッダー設定
    static navigationOptions = {
        header: null,
        //title: 'OptCamera',
        //headerLeft: () => <DrawerButton/>,
    };

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