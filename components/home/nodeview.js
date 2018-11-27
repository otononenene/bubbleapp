import React from 'react';
import {Alert, View, StyleSheet, TouchableOpacity, Text} from 'react-native'

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

    _navigate = (title) => {
        switch(title){
            case 'calculator':
            return <Calculator state={this.state.node}/>
            case 'calendar':
            return <Calendar state={this.state.node}/>
            case 'camera':
            return <Camera state={this.state.node}/>
            case 'texts':
            return <Texts state={this.state.node}/>
            case 'watch':
            return <Watch state={this.state.node}/>
            case 'Weather':
            return <Weather state={this.state.node}/>
        }
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
                    <View key={String(index)} style={{backgroundColor: "lightblue", padding: 10, borderWidth: 5, overflow: "hidden"}}>
                        <TouchableOpacity onPress={()=>{Alert.alert(
                            'setname',
                            'select',
                            [
                                {text: "OK", onPress: ()=>{}},
                            ]                        
                        )}}>
                        <Text style={{fontSize: 10}}>Call of Chutl</Text>
                        <Text style={{fontSize: 10}}>{value.name}</Text>
                        {/*this.props.node.map((value,index) => {
                        
                            <TouchableOpacity 
                                onPress={() => {return;}}
                                onLongPress={() => {return;}}
                            >
                                <Text>{value.text}</Text>
                            </TouchableOpacity>
                        })*/}
                        </TouchableOpacity>
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
                <View style={this.props.style}>
                    <TouchableOpacity
                        
                        onPress={() => {this.props.onPress(this.props.NodeName, this.props.NodeOption);}}
                        onLongPress={() => {this.props.onLongPress}}>
                            <Text>{this.props.Title}</Text>
                    </TouchableOpacity>
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
    Viewer: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    }
});