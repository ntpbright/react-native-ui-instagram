import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Container, Content, Icon, Thumbnail } from "native-base";
import CardComponent from '../CardComponent';

class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor}) => (
      <Icon name="ios-home" style={{ color: tintColor }}/>
    )
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={ styles.story_container }>
            <View style={ styles.story_header_btn }>
              <Text style={{ fontWeight:'bold' }}>Stories</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="md-play" style={{ fontSize:14 }}></Icon>
                <Text style={{ fontWeight:'bold' }}>Watch All</Text>
              </View>
            </View>
            <View style={{ flex: 3, paddingTop: 10,}}>
              <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                contentContanerStyle=
                {{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5,
                }}
              >
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/1.png')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/2.jpg')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/3.jpg')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/4.jpg')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/5.jpg')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/6.jpg')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/7.jpg')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/8.jpg')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/9.jpg')}/>
                <Thumbnail style={ styles.thumbnail_story } source={require('../../assets/story_thumbnails/10.jpg')}/>
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>
        </Content>
      </Container>
    );
  }
}

export default HomeTab;


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'
  },
  story_container:{
    height: 100,
    backgroundColor: 'white',
  },
  story_header_btn:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
  },
  thumbnail_story:{
    marginHorizontal: 5,
    borderColor: 'pink',
    borderWidth: 2,
  }
})