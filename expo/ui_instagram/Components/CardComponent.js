import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import{ Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

class CardComponent extends Component {

  render() {
    
    const images = {
      "1": '../assests/feed_images/1.jpg',
      "2": '../assests/feed_images/2.jpg',
      "3": '../assests/feed_images/3.jpg'
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/IMG_5186.jpg')} />
            <Body>
              <Text>Ntp Chong</Text>
              <Text note>Nov 4, 1996</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Image source={require('../assets/IMG_5189.jpg')} style={styles.image} />
        </CardItem>
        <CardItem style={{height:45}}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline" style={styles.icon} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={styles.icon} />
            </Button>
            <Button transparent>
              <Icon name="ios-send-outline" style={styles.icon} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{height:20}}>
          <Text>101 likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight:"900"}}>Ntp Chong </Text>
              The vacation on ske trip.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;


const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  image:{
    height: 200,
    width: null,
    flex: 1
  },
  icon:{
    color: 'black',
  }
})