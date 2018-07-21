import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity} from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { NavigationBar, Title, ListView, Button, Icon, Text } from '@shoutem/ui'

import TrainItem from "./TrainItem";
const list =[{ id: 1, title: "hello", time: "00:30" }, { id: 2, title: "good", time: "01:00" }]

class TrainList extends Component {
  constructor() {
    super();
    this.state = {
      active: 1,
    }
    this.onClickItem=this.onClickItem.bind(this);
  };  

  onClickItem(id){
    this.setState({
      active:id
    })
  }

  render() {
    let { active } = this.state;
    console.log(active)
    return (
      <View style={{display:"flex", flexDirection:"column" }}>
        <View >
          <NavigationBar
            styleName="inline"
            centerComponent={<Title>STRETCH {active}</Title>}
            rightComponent={
              <Button>
                <Icon name="sidebar" />
              </Button>
            }
          />
        </View>
        <View >
          <ListView
            data={list}
            renderRow={( item ) => ( 
              <TrainItem active={active} item={item} onClick={this.onClickItem()}/>
            )}
            style={{flex:1}}
          />
        </View>
        <View>
          <Text style={{color:"black"}}>{active}</Text>
        </View>
        
        

       {/* <FlatList
        
          data={list}
          renderItem={({ item }) => ( 
            <TrainItem active={active} item={item}/>
          )}
          keyExtractor={item => item.id}
        /> */}
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