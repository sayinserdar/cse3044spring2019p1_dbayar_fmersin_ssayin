import React from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput } from "react-native";
import {
  Container,
  Content,
  Item,
  Label,
  Input,
  DatePicker,
  Picker,
  Form,
  Icon,
  Button
} from "native-base";
import axios from "axios";

export class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
      phone_number: "",
      email: "",
      birthyear: ""
    };
  }

  // this.props.navigation.navigate('Home');
  signup() {
    fetch("http://172.20.10.11:3000/user/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        password_: this.state.password,
        phone_number: this.state.phone_number,
        email: this.state.email,
        gender: this.state.gender,
        birthyear: this.state.birthyear
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.length > 0) {
          this.props.navigation.navigate("Home");
        } else {
          this.setState({ errorMessage: "Signup is not successful" });
        }
      })
      .catch(error => {
        console.log("no user");
        console.error(error);
      });
  }

  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground
          source={require("../../assets/signupbackground.png")}
          style={styles.container}
        >
          <Content>
            <View style={{ height: "60%", marginTop: 50, textAlignVertical:"center", marginLeft: 40 }}>
            <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              style={styles.textInput}
              onChangeText={name => this.setState({ name })}
              placeholder = "Name"
              value={this.state.name}
            />
            <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              onChangeText={username => this.setState({ username })}
              style={styles.textInput}
              placeholder = "Username"
              value={this.state.username}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              placeholder = "Password"
              value={this.state.password}
            />
             <TextInput
              style={styles.textInput}
              onChangeText={confirmPassword => this.setState({ confirmPassword })}
              placeholder = "Confirm Password"
              value={this.state.confirmPassword}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={phone_number => this.setState({ phone_number })}
              placeholder = "Phone Number"
              value={this.state.phone_number}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              placeholder = "Email"
              value={this.state.email}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={gender => this.setState({ gender })}
              placeholder = "Gender"
              value={this.state.gender}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={birthyear => this.setState({ birthyear })}
              placeholder = "Birth Year"
              value={this.state.birthyear}
            />
               <Button
            full
            bordered
            light
            style={styles.placeButton}
            onPress={() => this.signup()}
          >
            <Text style={styles.baseText}>Signup</Text>
          </Button>
              
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8c52ff",
    justifyContent: "center"
  },
  baseText: {
    // fontFamily: 'sans-serif',
    color: "#8c52ff",
    fontSize: 14,
    marginLeft: 35,
    marginBottom: 3
  },
  item: {
    borderRadius: 5,
    width: "80%",
    height: "5%",
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "white"
  },
  placeButton: {
    alignSelf: "center",
    textAlignVertical: "center",
    borderRadius: 5,
    width: "80%",
    height: 30,
    marginBottom: 10,
    marginTop: 10,
    color: "black",
    marginRight: 20,
    backgroundColor: "violet"
  },
  textInput: {
    marginBottom: 15,
    height: 40,
    width: 300,
    borderColor: 'white',
    borderWidth: 1 
  }
});
