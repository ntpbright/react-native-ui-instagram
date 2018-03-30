import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

import { Icon } from 'native-base'
import { TabNavigator } from 'react-navigation'

class MainScreen extends Component {

  static navigationOptions = {
    // headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10,}} />,
    // title: "Instagram",
    // headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 10,}} />,
    header: null,
  }

  render() {
    return (
      <AppTabNavagator />
    );
  }
}
export default MainScreen;

const AppTabNavagator =  TabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfilesTab: {
    screen: ProfileTab
  }
},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPosition:"bottom",
  tabBarOptions: {
    style:{
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel:false,
    showIcon:true
  }
})

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
  }
})
