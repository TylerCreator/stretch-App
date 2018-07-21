import React, { Component } from 'react'
import { TouchableOpacity} from 'react-native'
import { View, Icon, Row, Image, Subtitle, Caption, Divider,Text } from '@shoutem/ui'
import Video from 'react-native-video'
import V from '../broadchurch.mp4'
import Im from '../testImage.jpg'

class TrainItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      item: null,
    }
  };
  
  componentWillReceiveProps(){
    this.setState({
      active: this.props.active,
      item: this.props.item,
    })
  }

  render() {
    let { active, item } = this.state;
    let line;
    if (active === item.id){
      return(
        // <View style={{ flexDirection: 'column' }}>
        //   <View style={{ flex: 1, flexDirection: 'row' }} >
        //     <Text style={{ flex: 0.5 }}>{item.title}</Text>
        //     <Text style={{ flex: 0.5 }}>{item.time}</Text> 
        //   </View>
        //   <View style={{ height:100, width:null, flex: 1, flexDirection: 'row'  }} >
        //     <Video style={{ height:100, width:null, flex: 1 }} source={V} muted={true} resizeMode="cover" repeat/>
        //   </View>
        // </View>
        //<Video source={V} resizeMode="cover" repeat/>

        <TouchableOpacity onPress={this.props.onClickItem}>
          <Row style={{flex: 1, flexDirection:"row"}}>
            <Image source={Im} style={{height:50, width: null, flex: 1}} resizeMode="contain"/>
            <View styleName="vertical" style={{flex: 3}}>
              <Subtitle>{item.title}</Subtitle>
              <Caption>{item.time}</Caption>
            </View>
            <Icon name="up-arrow" styleName="disclosure"/>
          </Row>
          <Row>
            <Video style={{ height:200, width:null, flex: 1}} source={V} muted={true} resizeMode="contain" repeat/>
          </Row>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    }
    else{
      return (
        <TouchableOpacity>
          <Row style={{flex: 1, flexDirection:"row"}}>
            <Image source={Im} style={{height:50, width: null, flex: 1}} resizeMode="contain"/>
            <View styleName="vertical" style={{flex: 3}}>
              <Subtitle>{item.title}</Subtitle>
              <Caption>{item.time}</Caption>
            </View>
            <Icon name="down-arrow" styleName="disclosure"/>
          </Row>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    }
  
  }
}

export default TrainItem;