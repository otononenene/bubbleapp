import React from 'react';
import {Alert, View, StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native'
import Gestures from 'react-native-easy-gestures';
import {_navigate} from '../router/Router.js'

const Dim = Dimensions.get("window").width/3 -10;

export class NodeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            node: this.props.node,
            gestureFlag: false,
        }
    }

    nodeCompo = () => {
        this.node.setState({Component: <Calculator/>})
    }

    navigate = (node) => {
        _navigate(node);

    }

    _gesture = () => {
        /*ジェスチャーモード*/
        this.setState({gestureFlag: true});

        
    }

    render(){
        return(
            <View style={styles.Viewer}>
                {this.state.node.map((value,index) => {
                    return(
                        <View key={String(index)}>
                            <Gestures
                                rotatable={false}
                                scalable={{
                                    min: 1,
                                    max: 3,
                                }}
                                
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "lightblue",
                                        margin: 5,
                                        borderWidth: 5,
                                        borderRadius: Dim * value.size /2,
                                        overflow: "hidden",
                                        width: value.size * Dim,
                                        height: value.size * Dim,
                                    }} 
                                    onPress={()=>{this.navigate(value)}}
                                >
                                    <Text style={{fontSize: 20, alignItems: 'center'}}>{value.name}</Text>
                                </TouchableOpacity>
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