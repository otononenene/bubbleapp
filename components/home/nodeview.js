import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'

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
            <View style={StyleSheet.container}>

                {/*NodeView*/}
                <TouchableOpacity 
                    onPress={this._navigate(this.state.node.Component)}
                    onLongPress={this._gesture}>
                    <></>
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
});