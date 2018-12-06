import React from 'React';
import {View, ImageBackground,Button,Text } from 'react-native'
const Circle='./circle.png';
import {styles} from './calculator'
export  class Node extends React.Component{
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
                                    <View style={styles.text}>
                                        <Button
                                            onPress={()=>{
                                                this.props.action(value)
                                            }}
                                            title={String(value)}
                                        />
                                    </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}


export class Table extends React.Component{
    render(){
        return(
            <View style={styles.table}>
                <View style={styles.result}>
                    <Text style={styles.resultContent}>
                    {this.props.result}
                    {this.props.Decimal & this.props.temp==0.1 ?'.0':null}
                    </Text>
                </View>
                <Node array={this.props.mojis[0]} action={this.props.action.bind(this)}/>
                <Node array={this.props.mojis[1]} action={this.props.action.bind(this)}/>
                <Node array={this.props.mojis[2]} action={this.props.action.bind(this)}/>
                <Node array={this.props.mojis[3]} action={this.props.action.bind(this)}/>   
                <Node4 array={this.props.mojis[4]} loading={this.props.action.bind(this)}/>
            </View>
        )
    }
}


export class Node4 extends React.Component{
    render(){
        return(
            <View style={styles.Row}>
            <Calbutton 
                style={styles.longnode}
                moji={this.props.array[0]}
                loading={this.props.loading.bind(this)}  
            />
            <Calbutton
                style={styles.node}
                moji={this.props.array[1]}
                loading={this.props.loading.bind(this)}
            />
            <Calbutton
                style={styles.node}
                moji={this.props.array[2]}
                loading={this.props.loading.bind(this)}
            />
        </View>
        )
    }
}

export class Calbutton extends React.Component {
    render(){
        return(
            <View style={this.props.style}>
                <View style={styles.text}>
                    <Button
                        onPress={()=>{
                            this.props.loading(this.props.moji)   
                        }}
                        title={String(this.props.moji)}
                    /> 
                </View>
            </View>
        )
    }
}


