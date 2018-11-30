import React from 'react';
import {Text, View, StyleSheet, StatusBar,} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {List} from '../list/list.js';
import {AddNode} from '../home/nodeview.js';
import BackButton from '../router/BackButton.js';

export class TextView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            node: {
                index: 0,
                name: 'Cthul',
                size: 1,
                option: {
                    pictures: null,    
                },
            },
            addFlag: true,
        }
    }

    render(){
        return(
            <View style={styles.container}>
            <StatusBar hidden={true}/>
    
            {/*ヘッダーエリア*/}
            <View style={styles.button}>
    
              {/*左ボタン*/}
              <View style={styles.leftbutton}>
                <BackButton/>
              </View>
    
              {/*中央空白*/}
              <View style={styles.space}></View>
    
              {/*右ボタン*/}
              <View style={styles.rightbutton}>
                    {(()=>{if(this.state.addFlag === true){
                        return (
                            <AddNode
                                style={styles.Nodestyle}
                                Title='追加'
                                onPress={()=>{}}
                                onLongPress={()=>{}}
                                NodeName='text'
                                NodeOption={this.state.node.option}
                            />
                        );}
                        return;
                    })()}
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
                    <Texts tabLabel='メモ帳' />
                    {/*Option*/}
                    <Option tabLabel='設定'/>
                </ScrollableTabView>
            </View>
        </View>
        );
    }
}

export class Texts extends React.Component{
    static navigationOptions = {
        header: null,
        //title: 'Home',
        //headerLeft: () => <DrawerButton/>,
    };
    render() {
        return (
          <View/>
        );
    }
}

export class Option extends React.Component{
    static navigationOptions = {
        header: null,
        //title: 'Home',
        //headerLeft: () => <DrawerButton/>,
    };
    render() {
        return (
          <View/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    Nodestyle: {
        flex: 1,
        backgroundColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
    },
});