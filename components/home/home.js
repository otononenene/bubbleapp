import React from 'react';
import {} from 'react-navigation';
import {Alert, StyleSheet, Button, Text, View, ImageBackground, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import {AddNode, NodeView} from './nodeview';
import {NodeStorage} from '../storage/storage.js';
import DrawerButton from '../router/DrawerButton';

const Myon = './pictures/Myon.jpg';

const storage = new NodeStorage();

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      node: [
      ],
      set: true,
      select: 0,
      nowNodeKey: null,
    };
    this.tmp = [{index: 0, name: 'Calculator', size: 1, option: []},];

    //this.state.node = storage.LoadData();
    //storage.SaveData(this.state.node);
    //storage.RemoveData();
  }

  //ヘッダー設定
  static navigationOptions = {
    header: null,
    //title: 'Home',
    //headerLeft: () => <DrawerButton/>,
  };

  //描画
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        
        {/*ヘッダーエリア*/}
        <View style={styles.button}>

          {/*左ボタン*/}
          <View style={styles.leftbutton}>
            <DrawerButton/>
          </View>

          {/*中央空白*/}
          <View style={styles.space}>
          </View>

          {/*右ボタン*/}
          <View style={styles.rightbutton}>
            <TouchableOpacity
              onPress={()=>{
                storage.Load(this.state.node);
                this.setState({true: !this.state.true});
              }}

              onLongPress={()=>{
                storage.SaveData(this.state.node);
                this.setState({node: this.state.node});
              }}
            >
              <Text style={{fontSize: 20}}>load/save</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/*フィールドエリア*/}
        <View style={styles.table}>

          <NodeView node={this.state.node}>

          </NodeView>  
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  button: {
    flex: 0.95,
    flexDirection: 'row'
  },
  leftbutton: {
    flex: 1,
  },
  space: {
    flex: 2,
    flexDirection: 'row',
  },
  rightbutton: {
    flex: 1,
  },
  table: {
    flex: 9,
  },
  ImgMyon: {
    flex: 1,
  },
  samples: {
    textAlign: 'center',
    fontSize: 150,
    color: 'red'
  },
  TxtMenu: {
    textAlign: 'justify',
    fontSize: 30,
  },
  Nodestyle: {
    flex: 1,
    backgroundColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
  }
});
