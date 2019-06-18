
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Item, Label, Input, DatePicker, Picker, Form, Icon,  Button } from "native-base";
import axios from 'axios';

export class SignupScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
      phone_number: '',
      email: ''
     };
    this.setDate = this.setDate.bind(this);
    this.pick = {
      selected: undefined
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  signup() {
    axios.post('http://localhost:8080/signup', {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      phone_number: this.state.phone_number,
      email: this.state.email,
      gender: this.state.gender
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
      <Container style={styles.container}>
      <ImageBackground source={require('../../assets/signupbackground.png')} style={styles.container}>
       <Content>
         <View style={{height: '60%', marginTop: 50}}>
         <Text style={styles.baseText}> Name</Text>
           <Item full rounded inlineLabel style={styles.item}>
              <Input style={{color:'#8c52ff'}}/>
           </Item>
         <Text style={styles.baseText}>Choose your user name</Text>
         <Item full rounded inlineLabel style={styles.item}>
             <Input style={{color:'#8c52ff'}}/>
           </Item>
         <Text style={styles.baseText}>Create a password</Text>
         <Item full rounded inlineLabel style={styles.item}>
              <Input style={{color:'#8c52ff'}}/>
           </Item>
         <Text style={styles.baseText}>Confirm a password</Text>
         <Item full rounded inlineLabel style={styles.item}>
            <Input style={{color:'#8c52ff'}}/>
           </Item>
         <Text style={styles.baseText}>Birthday</Text>
         <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(1945, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "#8c52ff", fontWeight: 'bold', alignSelf: 'center' }}
            placeHolderTextStyle={{ color: "#8c52ff", alignSelf: 'center'}}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text style={{ color: "#8c52ff", fontWeight: 'bold', alignSelf: 'center' }}>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
         <Text style={styles.baseText}>Gender</Text>
         <Form>
           <Picker
              mode="dropdown"
              placeholder="Select your gender"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your gender"
              textStyle={{ color: "#8c52ff", fontWeight: 'bold', alignSelf: 'center' }}
              itemStyle={{
                backgroundColor: "#ffffff",
                marginLeft: 10,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#8c52ff' }}
              style={{ width: '80%', alignSelf: 'center' }}
              selectedValue={this.pick.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Woman" value="key0" />
              <Picker.Item label="Man" value="key1" />
            </Picker>
          </Form>

         <Text style={styles.baseText}>Mobile Phone</Text>
         <Item full rounded inlineLabel style={styles.item}>
             <Input style={{color:'#8c52ff'}}/>
           </Item>
         <Text style={styles.baseText}>Email Address</Text>
         <Item full rounded inlineLabel style={styles.item}>
             <Input style={{color:'#8c52ff'}}/>
           </Item>
           <Button full light style={styles.placeButton} onPress={() => this.props.navigation.navigate('Signup')}>
            <Text >Start Now!</Text>
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
     flex:1,
     backgroundColor: '#8c52ff',
     justifyContent: 'center',
  },
  baseText: {
    // fontFamily: 'sans-serif',
    color:'#8c52ff',
    fontSize: 14,
    marginLeft: 35,
    marginBottom: 3,
  },
  item: {
    borderRadius: 5,
    width: '80%', 
    height: '5%',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: "white"
  },
  placeButton: {
    alignSelf: 'flex-end',
    borderRadius: 5, 
    width: '30%',
    height: '5%', 
    marginBottom:10,
    marginTop: 10,
    marginRight: 20,
  },
});


