import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
  import { Container, Header, Content, ListItem, CheckBox, Body, Form, Input, Label, Item, Button} from 'native-base';


export class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <ImageBackground source={require('../../assets/LoginBackground.png')} style={styles.container}>
          <Item floatingLabel style={{marginBottom: 10}}>
            <Label style={styles.baseText}>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{marginBottom: 40}}>
            <Label style={styles.baseText}> Password</Label>
            <Input />
          </Item>
          <Button full bordered light style={styles.placeButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.baseText}>LOG IN</Text>
          </Button>
          <Text style={styles.baseText} >or</Text>
          <Button full bordered light style={styles.placeButton} onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.baseText} >SIGN UP</Text>
          </Button>
        </ImageBackground>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
  },
  baseText: {
    fontFamily: 'sans-serif',
    color:"white",
  },
  placeButton: {
    alignSelf: 'center',
    borderRadius: 5, 
    width: '95%', 
    marginBottom:10,
    marginTop: 10,
  },
});