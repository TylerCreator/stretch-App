import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Video from 'react-native-video'
import V from '../broadchurch.mp4'


class TrainItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      item: props.item,
    }
  };

  render() {
    let { active, item } = this.state;
    let line;
    if (active === item.id){
      return(
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flex: 1, flexDirection: 'row' }} >
            <Text style={{ flex: 0.5 }}>{item.title}</Text>
            <Text style={{ flex: 0.5 }}>{item.time}</Text> 
          </View>
          <View style={{ height:100, width:null, flex: 1, flexDirection: 'row'  }} >
            <Video style={{ height:100, width:null, flex: 1 }} source={V} resizeMode="cover" repeat/>
          </View>
        </View>
        //<Video source={V} resizeMode="cover" repeat/>
      )
      ;
    }
    else{
      return (
        <View style={{ height:100, flex: 1, flexDirection: 'row' }}>
          <Text style={{ flex: 0.5 }}>{item.title}</Text>
          <Text style={{ flex: 0.5 }}>{item.time}</Text>
        </View>
      );
    }
  
  }
}

export default TrainItem;