import React from 'react';
import {} from 'react-navigation';
import {Alert, StyleSheet, Button, Text, View, ImageBackground, StatusBar, Dimensions} from 'react-native';
import {AddNode, NodeView} from './nodeview'


const Myon = './pictures/Myon.jpg';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      node: [
        {index: 0, name: 'Chutl', size: 1, option: []},
      ],
      index: 0,
      option: [],
      nowNodeKey: null,
    };
  }

  changeSize = () => {
    if(this.state.index%3 == 0){
      return 2;
    }
    return 1;
  }

  _addNode = (name, option) => {
    const node = this.state.node;
    const size = this.changeSize();

    //追加
    node.push({
      index: this.state.index+1,
      name: name,
      size: size,
      option: option,
    });
    

    //再描画
    this.setState({
      node: node,
      index: this.state.index+1,
    })
  }

  _clearNode = (key) => {
    const node = this.state.node;
    if(node.filter((value,index) => {
      if(value.key == key)
      node.splice(index, 1);
    }));

    this.setState({
      node: node, 
    });
  }

  _allclearNode = () => {
    //const node = [  {index: 0, name: 'Chutl', size: 1, option: []}];
    const node = this.state.node;
    Alert.alert(
      'state',
      'Clear',
      [
        {text: 'Ok', onPress: ()=>{}},
      ],
      {cancelable: false}
    );

    node.pop();

    this.setState({node: node});
    //this.setState({node: node});
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
            <AddNode
              style={styles.Nodestyle}
              Title='追加'
              onPress={this._addNode.bind(this)}
              onLongPress={() => {this._allclearNode()}}
              NodeName='text'
              NodeOption={this.state.node.option}
              />
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
