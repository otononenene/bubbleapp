import React from 'React';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar,} from 'react-native'
import {List} from '../list/list.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {AddNode} from '../home/nodeview.js';
import BackButton from '../router/BackButton.js';

export class Watch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '牡丹だよ',
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
                  <WatchView tabLabel='時計' />
                  {/*Option*/}
                  <Option tabLabel='設定'/>
              </ScrollableTabView>
          </View>
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

export default class Option extends React.Component {
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
  