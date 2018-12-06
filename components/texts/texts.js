import React from 'react';
import {Text, View, StyleSheet, StatusBar,TextInput} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {List} from '../list/list.js';
import {AddNode} from '../home/nodeview.js';
import BackButton from '../router/BackButton.js';

export class TextView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:['メモ1','メモ2',],
            n:3,
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
                                onPress={()=>{
                                    this.state.title.push('メモ'+String(this.state.n))
                                    this.setState({
                                        n:this.state.n+1
                                    })

                                }}
                                onLongPress={()=>{
                                    alert('初期化しました(-ω-)')
                                    this.setState({
                                        n:3,
                                        title:['メモ１','メモ2']
                                    })
                                }}
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
                    {
                        this.state.title.map((value,index)=>{
                            return(
                            <View key={index} tabLabel={value}>
                                <Memo/>
                            </View>
                            )
                        })
                    }
                </ScrollableTabView>
            </View>
        </View>
        );
    }
}

export class Memo extends React.Component{
    static navigationOptions = {
        header: null,
        //title: 'Home',
        //headerLeft: () => <DrawerButton/>,
    };
    render() {
        return (
          <View>
              <TextInput>dadasd</TextInput>
          </View>
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