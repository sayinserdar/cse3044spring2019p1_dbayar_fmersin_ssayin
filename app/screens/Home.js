import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Footer, FooterTab } from 'native-base';
export class HomeScreen extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                <Thumbnail source={{uri: 'https://images.unsplash.com/photo-1557100955-93b2fb57c317?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'}} />
                </TouchableOpacity>
                <Body>
                  <Text>Serdar's Event</Text>
                  <Text note>Istanbul/ Turkey</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1395&q=80'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Home')} active>
              <Icon active name="home" />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
            </Button>
            <Button>
              <Icon name="close-circle" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  barText: {
    color: 'blue',
    fontSize: 10,
    fontWeight: 'bold',
  }
});