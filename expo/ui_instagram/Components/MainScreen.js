import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

import { Icon } from 'native-base'
import { TabNavigator } from 'react-navigation'

class MainScreen extends Component {

  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10,}} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 10,}} />
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
})

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
  }
})
