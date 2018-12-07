import React from 'React';
import {View, Text, StyleSheet,Button ,Dimensions} from 'react-native'
import {AddNode} from '../home/nodeview.js';
import BackButton from '../router/BackButton.js'; 
//import { WSATYPE_NOT_FOUND } from 'constants';
const Dim = Dimensions.get("window").width/3 -10;
import {Table} from './Node'

export class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Stack:[],
            result:0,//結果
            n:0,//入力回数
            Decimal:false,
            temp:10,
            mojis:[
                ['AC','+/-','%','÷'],
                [7,8,9,'×'],
                [4,5,6,'-'],
                [1,2,3,'+'],
                [0,'.','='],
            ],
            operator:null,//二項演算子
            node: {
                index: 0,
                name: 'Cthul',
                size: 1,
                addFlag:true,
                option: [{result:0}],
            },
        };
    }
  
    static navigationOptions = ({ navigation }) => {
      return {
         header: () => null
      } 
    }

    loading=(value)=>{
        switch(value){
            case 'AC':// all clear key　メモリと入力をすべて消去
                this.setState({
                            Stack:[],
                            n:0,
                            temp:10,
                            operator:null,
                            result:0,
                            Decimal:false
                })
                break;
            case 'C'://clear Key　入力途中の値を消去
                this.state.mojis[0][0]='AC'
                //this.state.loading_number=0;
                this.state.Stack.pop();
                this.setState({
                            n:0,
                            result:0
                })
                break;
            case '+/-'://正負の逆転
                //this.setState({})
                this.state.Stack[this.state.Stack.length-1]*=-1
                this.setState({
                            result:this.state.Stack[this.state.Stack.length-1]
                })
                break;
            case '%'://百分率
                this.state.Stack[this.state.Stack.length-1]/=100
                this.setState({
                            result:this.state.loading_number
                })
                break;
             case '+'://加算
                this.setState({
                            n:0,
                            operator:(a,b)=>{return a+b},
                            Decimal:false,
                            result:0,
                            temp:10
                })
                break;
            case '-'://減算
                this.setState({
                            n:0,
                            operator:(a,b)=>{return a-b;},
                            Decimal:false,
                            result:0,
                            temp:10
                })
                break;
            case '×'://乗算    
                this.setState({
                            n:0,
                            operator:(a,b)=>{return a*b},
                            Decimal:false,
                            result:0,
                            temp:10
                })
                break;
            case '÷'://除算
                this.setState({
                            n:0,
                            operator:(a,b)=>{return a/b},
                            Decimal:false,
                            result:0,
                            temp:10
                })
                break;
            case '='://二項演算子の計算結果
                if(this.state.n==0 || this.state.operator==null)
                    return;
                this.setState({
                            result:this.state.operator(this.state.Stack.pop(),this.state.Stack.pop())
                })
                this.state.Stack.push(this.state.result)
                this.state.Stack.push(0)
                this.setState({
                    node:{
                        option:[
                            {result:this.state.result}
                        ]
                    }
                })
                break;
            case '.'://小数点
                this.setState({
                            Decimal:this.state.Decimal?false:true,//二回押したら、元に戻る
                })

                break;
            default://通常入力
                this.state.mojis[0][0]='C'
                if(this.state.Decimal==false){
                    if(this.state.n==0)
                        this.state.Stack.push(value)
                    else{
                        this.state.Stack[this.state.Stack.length-1]=this.state.Stack[this.state.Stack.length-1]*10+value
                    }
                }
                else {
                    this.state.Stack[this.state.Stack.length-1]=(this.state.Stack[this.state.Stack.length-1]*this.state.temp+value)/this.state.temp
                    this.setState({temp:this.state.temp*10})
                }
                this.setState({
                    result:this.state.Stack[this.state.Stack.length-1],
                })
                this.state.n++;
        }
    }
    
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.button}>
                <View style={styles.leftbutton}>
                    <BackButton/>
                </View>
                <View style={styles.space}></View>
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
        
            <Table 
                 mojis={this.state.mojis} 
                 action={this.loading.bind(this)}
                 mojis={this.state.mojis}
                 Decimal={this.state.Decimal}
                 temp={this.state.temp}
                 result={this.state.result}
            /> 
        </View>
      );
    }
}


export const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    button: {
      marginTop: 20,
      flex: 1,
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
    result:{
        flex:1.4,
    },
    resultContent:{
        color:'red',
        fontSize:100
    },
    rightbutton: {
      flex: 1,
      backgroundColor: 'pink',
    },
    table: {
      flex: 9,
      backgroundColor: 'blue',
      
    },
    calbutton: {
        flex: 7,
        flexDirection:'column',
        flexWrap:'wrap',
    },
    Row:{
        flex:1.3,
        flexDirection:'row',
        backgroundColor: 'white',
    },
    CircleButton:{
        flex:1,
        padding: 2,
        
    },
    text:{
        fontSize:30,
    },
    ImageBackground:{
        padding: 5,
        flex:1
    },
    node: {
        borderRadius: Dim /2,
        borderWidth: 2,
        borderColor: 'black',
        padding: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    longnode:{
        borderRadius: Dim /2,
        borderWidth: 2,
        borderColor: 'black',
        padding: 5,
        flex: 2,
        justifyContent: 'center',
        alignItems:'center',
    },
    Nodestyle: {
        flex: 1,
        backgroundColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
});
  
export class OptCalculator extends React.Component{
    render() {
        return (
          <View/>
        );
    }
}