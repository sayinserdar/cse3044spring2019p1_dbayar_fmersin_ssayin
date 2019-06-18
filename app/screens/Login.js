import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Body, Form, Input, Label, Item, Button} from 'native-base';
import axios from 'axios';

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
			username: '',
			password: ''
    };
    
  }
  login() {
    axios.post('http://localhost:8080/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      this.props.navigation.navigate('Home');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <Container>
        <ImageBackground source={require('../../assets/loginbackground.png')} style={styles.container}>
          <Item floatingLabel style={{marginBottom: 10}}>
            <Label style={styles.baseText}>Username</Label>
            {/* Make sure about the usage of textinput */}
            <TextInput value={this.state.userName}
						onChangeText={(value) => this.setState({username: value})}>
            </TextInput>
          </Item>
          <Item floatingLabel style={{marginBottom: 40}} >
            <Label style={styles.baseText}> Password</Label>
            <Input />
          </Item>
          <Button full bordered light style={styles.placeButton} onPress={this.login()}>
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
    // fontFamily: 'sans-serif',
    color:"white",
  },
  placeButton: {
    alignSelf: 'center',
    borderRadius: 5, 
    width: '85%', 
    marginBottom:10,
    marginTop: 10,
  },
});