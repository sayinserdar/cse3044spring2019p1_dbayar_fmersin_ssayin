
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Footer, FooterTab} from 'native-base';

export class ProfileScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
        <Left />
          <Body>
            <Text style={styles.titleText} >Profile</Text>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" />
              <Text > Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Profile')} active>
              <Icon  name="person" />
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
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});