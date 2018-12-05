import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const storage = new Storage({
    size: 1000, //データのサイズ
    storageBackend: AsyncStorage,   //reloadでのデータの保持
    defaultExpires: 1000 * 3600 * 24,   //キャッシュの期限
    enableCache: true,  //キャッシュを使うかどうか
    sync: {

    }
});

export const SaveBubble = ()=>{storage.save({
    key: 'BubbleNode',  //unipue
    data: NodeArray,
    expires: 1000 * 3600
});}

export const LoadBubble = (state)=>{storage.load({
      key: 'Node',
      id: '1001',
      autoSync: true,
      syncInBackground: true,
    }).then(ret => {
      //データが見つかったら
        switch(state){
            case index:
                return ret.index;
            case name:
                return ret.name;
            case size:
                return ret.size;
            case option:
                return ret.optipon;
        }
    })
    .catch(err => {
        //データがなかったら
        return null;
    });
}

export var NodeArray = {
    node: [{
        useNode
    }],
}

export var useNode = {
    index: 0,
    name: 'undefined',
    size: 1,
    option: [],
  };
  
export const SaveStatetoVar = ()=>{
    const node = this.state.node;

    useNode.index = node.index;
    useNode.name = node.name;
    useNode.size = node.size;
    useNode.option = node.option;
}
  
  // get all the "key-id" data under a key
  // !! important: this does not include "key-only" data
  storage.getAllDataForKey('user').then(users => {
    console.log(users);
  });
  
  // clear all "key-id" data under a key
  // !! important: "key-only" data is not cleared by this function
  storage.clearMapForKey('user');