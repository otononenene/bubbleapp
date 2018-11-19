import React from 'React';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {List} from '../list/list.js';

export class Watch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '牡丹だよ'
        }
    }

    _changeText = () => {
        if(this.state.text === '牡丹だよ'){
            this.setState({text: '蜜柑だよ'});
        }
        else{
            this.setState({text: '牡丹だよ'});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Hello World</Text>
                <TouchableOpacity
                    onPress={() => {this.setState({text: '蜜柑だよ'})}}
                    onLongPress={() => {this.setState({text: '牡丹だよ'})}}
                >
                    <Text style={{fontSize: 50}}>{this.state.text}</Text>
                </TouchableOpacity>
                <List Texts="りすとー＞" Title="List" onPress={() => {this._changeText()}}/>
            </View>
        );
    }
}



export class WatchView extends React.Component {

    /*STATE
    **
    */
    constructor(props){
        super(props);
        this.state = {

        };
    }
  
    static navigationOptions = ({ navigation }) => {
      return {
         header: () => null
      } 
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.button}>
            <View style={styles.leftbutton}>
            </View>
            <View style={styles.space}></View>
            <View style={styles.rightbutton}>
            </View>
          </View>
          <View style={styles.bubble}>  

          </View>
        </View>
      );
    }
}

export default class Opt extends React.Component {
  constructor(props){
      super(props);
      this.state = {

      };
  }

  //ヘッダー設定
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }

  //描画
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

          {/*スクロールエリア*/}
          <ScrollView showsVerticalScrollIndicator={false}>

            {/*ページA*/}
            <ComponentA/>
            {/*ページB*/}
            <ComponentB/>
            {/*ページC*/}
            <ComponentC/>
            {/*ページD*/}
            <ComponentD/>
            
          </ScrollView>
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
      marginTop: 20,
      flex: 0.75,
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
});
  
  