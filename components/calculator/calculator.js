import React from 'React';
import {View, Text, StyleSheet,ImageBackground } from 'react-native'
//import { WSATYPE_NOT_FOUND } from 'constants';
const Circle='./circle.png';
export class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaging_number:null
        };
       /* moji=['AC','+/-','%','÷',
            '7','8','9','×',
            '4','5','6','-',
            '1','2','3','+']*/
        this.moji0=['AC','+/-','%','÷']
        this.moji1=['7','8','9','×']
        this.moji2=['4','5','6','-']
        this.moji3=['1','2','3','+']
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
          <View style={styles.result}></View>
          <View style={styles.table}> 
            <View style={styles.Row}>
            {this.moji0.map((value,index)=>{
                        return(
                            <ImageBackground key={index} source={require (Circle)} style={styles.CircleButton}>
                            <Text style={styles.text}>{value}</Text>
                           </ImageBackground>
                        )

                    })
                
            
                }
            </View>
            <View style={styles.Row}>
            {this.moji1.map((value,index)=>{
                         return(
                            <ImageBackground key={index} source={require (Circle)} style={styles.CircleButton}>
                            <Text style={styles.text}>{value}</Text>
                           </ImageBackground>
                        )

                    })
                
            
                }
            </View>
            <View style={styles.Row}>
            {this.moji2.map((value,index)=>{
                        return(
                            <ImageBackground key={index} source={require (Circle)} style={styles.CircleButton}>
                             <Text style={styles.text}>{value}</Text>
                            </ImageBackground>
                        )

                    })
                
            
                }
            </View>
            <View style={styles.Row}>
            {this.moji3.map((value,index)=>{
                        return(
                            <ImageBackground key={index} source={require (Circle)} style={styles.CircleButton}>
                                <Text style={styles.text}>{value}</Text>
                            </ImageBackground>
                        )

                    })
                
            
                }
            </View>
            <View style={styles.Row}>
            </View>
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
    result:{
        flex:2
    },
    rightbutton: {
      flex: 1,
      backgroundColor: 'pink',
    },
    table: {
      flex: 9,
      backgroundColor: 'blue',
      flexDirection:'column',
      flexWrap:'wrap'
    },
    Row:{
        flex:1,
        flexDirection:'row'
    },
    CircleButton:{
        flex:1,
        backgroundColor:'red'
    },
    text:{
        flex:1,
        //alignItems:'center',
        //justifyContent:'justify',
        //alignItems:'center'
        textAlign:'justify'
    },
    ImageBackground:{
        flex:1
    }
});
  
export class OptCalculator extends React.Component{



    render() {



        return (



          <View/>



        );



    }



}