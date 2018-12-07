import React from 'react';
import {Alert, View, StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native'
import Gestures from 'react-native-easy-gestures';
import {_navigate} from '../router/Router.js';
import {Node} from './nodes.js';

const Dim = Dimensions.get("window").width/3 -10;
const grid = [
    [[0,0],     [Dim,0],    [Dim*2,0]],
    [[0,Dim],   [Dim,Dim],  [Dim*2,Dim]],
    [[0,Dim*2], [Dim,Dim*2],[Dim*2,Dim*2]],
    [[0,Dim*3], [Dim,Dim*3],[Dim*2,Dim*3]],
];

export class NodeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            node: this.props.node,
            gestureFlag: false,
            flag: false,
        }
    }

    checkPos = (top, left)=>{

    };

    render(){
        return(
            <View style={styles.Viewer}>
                {this.state.node.map((value,index) => {
                    if(value === {}){
                        return;
                    }
                    return(
                        <View
                            key={String(index)}
                        >
                            <Gestures
                                draggable={{
                                    x: true,
                                    y: true,
                                  }}
                                rotatable={false}
                                scalable={{
                                    min: 1,
                                    max: 3,
                                }}
                                onEnd={(event,style)=>{
                                    style.left=0;
                                    style.top=0;
                                    this.setState({flag: !this.state.flag});
                                }}

                            >
                                <MiniNode
                                    node={value}
                                    style={{
                                        backgroundColor: "lightblue",
                                        margin: 5,
                                        borderWidth: 5,
                                        borderRadius: Dim * value.size /2,
                                        overflow: "hidden",
                                        width: value.size * Dim,
                                        height: value.size * Dim,
                                    }}
                                >
                                </MiniNode>
                            </Gestures>
                        </View>
                    );
                })}
                
            </View>
        );
    }
}

export class AddNode extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={this.props.style}    
                    onPress={() => {this.props.onPress(this.props.NodeName, this.props.NodeOption);}}
                    onLongPress={() => {this.props.onLongPress()}}>
                        <Text>{this.props.Title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class MiniNode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            node: this.props.node,
        }
    }

    render(){
        return(
            <View style={this.props.style}>
                <Text>{this.state.node.name}</Text>
                <Text>{String(this.state.flag)}</Text>
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
    Viewer: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    }
});