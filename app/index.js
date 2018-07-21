import React, { Component } from 'react'
import {View, AppRegistry } from 'react-native'
import TrainList from './TrainList';

class Main extends Component{
	constructor(){
		super();
		this.state={
			//isLoggined:false,
		}
  };
render(){
  return(
  <View style={{flex:1}}><TrainList/></View>
  )
}
}

AppRegistry.registerComponent('testApp', () => Main);
