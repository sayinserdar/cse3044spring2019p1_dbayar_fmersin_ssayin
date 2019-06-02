
import React from "react";
import {Text, StyleSheet } from "react-native";
import {Container,  Content, Button, Icon, Footer, FooterTab} from 'native-base';

class Menu extends React.Component {
  render() {
      return(
        <Container>
        <Content padder>
        </Content>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" />
              <Text style={styles.titleText}> Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Profile')} active>
              <Icon  name="person" />
              <Text style={styles.titleText}> Profile</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Login')}>
              <Icon name="close-circle" />
              <Text style={styles.titleText}> Exit</Text>
            </Button>
      </Container>
      );
  }
}
export default Menu;

const styles = StyleSheet.create({
    titleText: {
      color: '#000000',
      fontSize: 10,
      fontWeight: 'bold',
    },
    
  });
