import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Body, Form, Input, Label, Item, Button} from 'native-base';

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
			username: '',
      password_: '',
      errorMessage: '',
      currentUserInfo: Object
    };
    
  }
  login() {
    fetch('http://172.20.10.11:3000/user/login',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        username: this.state.username,
        password_: this.state.password_,
      }),
     })
    .then(response => response.json())
    .then((response) => {
      
      if(response.length > 0) {
        this.setState({currentUserInfo: response[0]});
        this.props.navigation.navigate('Home',{ currentUserInfo: this.state.currentUserInfo} );
      }
      else {
        this.setState({errorMessage: "No user found"});
      }
    })
    .catch((error) => {
      console.log('no user');
      console.error(error);
    });
  }
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../assets/loginbackground.png")}
          style={styles.container}
        >
          <Text>
            {this.state.errorMessage}
          </Text>
        <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              onChangeText={username => this.setState({ username })}
              placeholder = "username"
              value={this.state.username}
            />
         <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              onChangeText={password_ => this.setState({ password_ })}
              placeholder = "Password"
              value={this.state.password_}
            />
          <Button
            full
            bordered
            light
            style={styles.placeButton}
            onPress={() => {
              this.login();
            }}
          >
            <Text style={styles.baseText}>LOG IN</Text>
          </Button>
          <Text style={styles.baseText}>or</Text>
          <Button
            full
            bordered
            light
            style={styles.placeButton}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.baseText}>SIGN UP</Text>
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