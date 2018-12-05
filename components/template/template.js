import React from 'React';
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import {List} from '../list/list.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class Home extends React.Component {

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
                <ScrollableTabView
                    tabBarPosition={"top"}
                    onScroll={this._changeCOlor}
                    tabBarBackgroundColor={""}
                    >
                    <CalendarView tabLabel="CalendarView"/>
                    <Option tabLabel="Option" />
                    
                </ScrollableTabView>
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
  
  