import React from 'React';
import {View, Text, StyleSheet,ImageBackground,Button,Alert } from 'react-native'
import {AddNode} from '../home/nodeview.js';
import BackButton from '../router/BackButton.js';
//import { WSATYPE_NOT_FOUND } from 'constants';
const Circle='./circle.png';

export class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            node: {
                index: 0,
                name: 'Cthul',
                size: 1,
                option: {
                    result: 0,
                    inputA:0,//最初の入力　
                    inputB:0,//演算子の決定後の入力
                    resut:0,//結果
                    loading_number:0,//入力途中の値
                    n:0,//入力回数
                    Decimal:false,
                    temp:0.1,
                    moji0:['AC','+/-','%','÷'],
                    moji1:[7,8,9,'×'],
                    moji2:[4,5,6,'-'],
                    moji3:[1,2,3,'+'],
                    moji4:[0,'.','='],
                    operator:null//二項演算子
                },
            },
        };
    }
  
    static navigationOptions = ({ navigation }) => {
      return {
         header: () => null
      } 
    }
    //足し算
    add=(a,b)=>{
        return a+b;
    }
    //引き算
    sub=(a,b)=>{
        return a-b;
    }
    //掛け算
    multi=(a,b)=>{
        return a*b;
    }
    //割り算
    div=(a,b)=>{
        return a/b;
    }
    loading=(value)=>{
        switch(value){
            case 'AC':// all clear key　メモリと入力をすべて消去
                this.state.loading_number=0;
                this.state.inputA=0;
                this.state.inputB=0;
                this.operator=null
                this.setState({result:this.state.loading_number})
                break;
            case 'C'://clear Key　入力途中の値を消去
                this.moji0[0]='AC'
                this.state.loading_number=0;
                this.setState({result:this.state.loading_number})
                break;
            case '+/-'://正負の逆転
                //this.setState({})
                this.state.loading_number*=-1
                this.setState({result:this.state.loading_number})
                break;
            case '%'://百分率
                this.state.loading_number/=100;
                this.setState({result:this.state.loading_number})
                break;
            case '+'://加算
                this.state.inputA=this.state.loading_number;
                this.operator=this.add;
                this.state.loading_number=0;
                this.Decimal=false
                this.setState({result:this.state.loading_number})
                break;
            case '-'://減算
                this.state.inputA=this.state.loading_number;
                this.operator=this.sub;
                this.state.loading_number=0;
                this.Decimal=false
                this.setState({result:this.state.loading_number})
                break;
            case '×'://乗算    
                this.state.inputA=this.state.loading_number;
                this.operator=this.multi;
                this.state.loading_number=0;
                this.Decimal=false
                this.setState({result:this.state.loading_number})
                break;
            case '÷'://除算
                this.state.inputA=this.state.loading_number;
                this.operator=this.div;
                this.state.loading_number=0;
                this.Decimal=false
                this.setState({result:this.state.loading_number})
                break;
            case '='://二項演算子の計算結果
                this.state.inputB=this.state.loading_number
                this.setState({result:this.operator(this.state.inputA,this.state.inputB)})
                break;
            case '.'://小数点
                this.Decimal=true;
                this.setState({result:this.state.loading_number})
                break;
            default://通常入力
                this.moji0[0]='C'
                if(this.Decimal==false){
                    this.state.loading_number=n>0?this.state.loading_number*10+value:value
                }
                else {
                    this.state.loading_number=this.state.loading_number+value*temp;
                    temp*=0.1;
                }
                this.setState({result:this.state.loading_number})
                n++;
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

            <View style={styles.table}> 
                <View style={styles.result}>
                    <Text style={styles.resultContent}>{this.state.result}</Text>
                </View>
                <Node array={this.moji0} action={this.loading.bind(this)}/>
                <Node array={this.moji1} action={this.loading.bind(this)}/>
                <Node array={this.moji2} action={this.loading.bind(this)}/>
                <Node array={this.moji3} action={this.loading.bind(this)}/>   
                <View style={styles.Row}>
                    <View style={styles.longnode}>
                     <ImageBackground  source={require (Circle)} style={styles.CircleButton}>
                        <View style={styles.text}>
                        <Button
                            onPress={()=>{
                             this.loading(this.moji4[0])   
                            }}
                            title={String(this.moji4[0])}
                        /> 
                        </View>
                     </ImageBackground>
                    </View>
                    <View style={styles.node}>
                    <ImageBackground  source={require (Circle)} style={styles.CircleButton}>
                        <View style={styles.text}>
                        <Button
                            onPress={()=>{
                             this.loading(this.moji4[1])   
                            }}
                            title={String(this.moji4[1])}
                        /> 
                        </View>
                     </ImageBackground>
                    </View>
                    <View style={styles.node}>
                    <ImageBackground  source={require (Circle)} style={styles.CircleButton}>
                        <View style={styles.text}>
                        
                        <Button
                            onPress={()=>{
                             this.loading(this.moji4[2])   
                            }}
                            title={String(this.moji4[2])}
                        /> 
                        </View>
                     </ImageBackground>
                    </View>
                </View>
            </View>
        </View>
      );
    }
}
class Node extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
    <View style={styles.Row}>
    {
        this.props.array.map((value,index)=>{
         console.log(this.props.action)
            return(
            <View style={styles.node} key={index}>
            <ImageBackground  source={require (Circle)} style={styles.CircleButton}>
                <View style={styles.text}>
                <Button
                    onPress={()=>{
                     this.props.action(value)
                    }}
                    title={String(value)}
                />
                </View>
            </ImageBackground>
            </View>
        )
    })
    }
    </View>
    )
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
        fontSize:20
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
        flex:1.1,
        flexDirection:'row',
        backgroundColor: 'green',
    },
    CircleButton:{
        flex:1,
        padding: 2,
        
    },
    text:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    ImageBackground:{
        padding: 5,
        flex:1
    },
    node: {
        borderWidth: 2,
        borderColor: 'green',
        padding: 5,
        flex: 1,
        //justifyContent: 'center',
        //alignItems:'center',
    },
    longnode:{
        borderWidth: 2,
        borderColor: 'green',
        padding: 5,
        flex: 2,
    },
    Nodestyle: {
        flex: 1,
        backgroundColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
    },
});
  
export class OptCalculator extends React.Component{



    render() {



        return (



          <View/>



        );



    }



}