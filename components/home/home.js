import React from 'react';
import {} from 'react-navigation';
import {StyleSheet, Button, Text, View, ImageBackground, StatusBar } from 'react-native';
import DrawerButton from '../router/DrawerButton'
import Icon from 'react-native-vector-icons/FontAwesome';

const Myon = './pictures/Myon.jpg';

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      node: [
        {name: ''},
        {size: 0},
        {option: []},
      ],
      index: 0,
    };
  }

  _addNode = (node) => {
    this.state.node.push(node);
  }

  _clearNode = (Key) => {
    if(this.state.node.filter((value,index) => {
      if(value.key == key)
      this.state.node.splice(index, 1);
    }));
  }

  _allclearNode = () => {
    this.state.node = [];
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
          </View>

          {/*中央空白*/}
          <View style={styles.space}>
          </View>

          {/*右ボタン*/}
          <View style={styles.rightbutton}>
            <DrawerButton dest={'StackCalculator'}/>
          </View>

        </View>

        {/*フィールドエリア*/}
        <View style={styles.table}
          onStartShouldSetResponder={() => true}
        >

          <NodeView node={this.state.node}>

            {/*背景画像*/}
            <ImageBackground source={require (Myon)} style={styles.ImgMyon}>  
              <Text style={styles.samples}>SAMPLE</Text>
            </ImageBackground>
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
    backgroundColor: 'white',
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
  table: {
    flex: 9,
    backgroundColor: 'red',
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
});
