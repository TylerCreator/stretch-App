import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import TrainItem from "./TrainItem";
const list =[{ id: 1, title: "hello", time: "00:30" }, { id: 2, title: "good", time: "01:00" }]

class TrainList extends Component {
  constructor() {
    super();
    this.state = {
      active: 1,
    }
  };

  render() {
    let { active } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={list}
          renderItem={({ item }) => ( 
            <TrainItem active={active} item={item}/>
          )}
          keyExtractor={item => item.id}
        />
      {/* <Card containerStyle={{ padding: 0 }} >
          {
            [{ title: "hello", time: "00:30" }, { title: "good", time: "01:00" }].map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.title}
                />
              );
            })
          }
        </Card> */}
      </View>
    )
  }
}

export default TrainList;