import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import React from 'react';
import {Alert} from 'react-native';

const storage = new Storage({
    size: 1000, //データのサイズ
    storageBackend: AsyncStorage,   //reloadでのデータの保持
    defaultExpires: 1000 * 3600 * 24,   //キャッシュの期限
    enableCache: true,  //キャッシュを使うかどうか
    sync: {
    }
});

export class NodeStorage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.tmp = [{
            index: 0,
            name: '',
            size: 1,
            option: {},
        },]
    }

    _checkData = () => {
        node = this._Load();
        if(node === []){
            return false;
        }
        return true;
    }

    Load = (nodeArray)=>{
        if(this._checkData() == false){
            return;
        }
        //load
        this.tmp = this.LoadData();
        if(this.tmp.length >= nodeArray.length){
          this.tmp.map((value, index)=>{
            nodeArray[index] = value
          },nodeArray);  
        }
        else{
          const tmplen = this.tmp.length;
          const nodelen = nodeArray.length;
          this.tmp.map((value, index)=>{
            nodeArray[index] = value
          },nodeArray);
          
          for(let count = nodelen-tmplen; count > 0 ;count--){
            nodeArray.pop();
          }
        }
    }
    LoadData = () => {
        this._Load();
        return this.tmp;
    }

    _Load = () => {
        storage.load({
            key: 'node',
            autoSync: true,
            syncInBackground: true,
        }).then(ret => {
            //データがあったら
            this.tmp = ret;
        }).catch(err => {
            this.tmp = [];
        })
    }

    SaveData = (nodes) => {
        this.tmp = nodes;
        this._Save();
    }

    _Save = () => {
        storage.save({
            key: 'node',
            data: this.tmp,
            expires: 1000*60,
        })
        Alert.alert(
            'Saving',
            'Ok?',
            [{text: 'yes', onPress: ()=>{return;}}]
        );
    }

    RemoveData = () => {
        this._Remove();

    }

    _Remove = () => {
        storage.remove({
            key: 'node',
        })
        Alert.alert(
            'Removing',
            'Ok?',
            [{text: 'yes', onPress: ()=>{return;}}]
        );
    }

    render(){
        return;
    }
}