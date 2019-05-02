import React from 'react';
import { 
  StyleSheet,
  ImageBackground, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity} from 'react-native';


export default class App extends React.Component {

  state = {
    userName: "",
    password: ""
  };

  userNameChangedHandler = name => {
   this.setState({
     userName: name
   });
  };

  passwordChangedHandler = _name => {
    this.setState({
      password : _name
    });
   };

  render() {
    return (
      <ImageBackground source={require('./assets/MainPage.png')} style={styles.container}>
         <Image source={require('./assets/CityCyclersLogo.png')} style={{width: 150, height: 150, marginBottom:20}} />
           <TextInput
             style={styles.inputContainer}
             placeholder=" username"  
             value={this.state.userName}
             onChangeText={this.userNameChangedHandler}
             autoFocus={true}
             />
            <TextInput
             style={styles.inputContainer}
             placeholder=" password"
             secureTextEntry={true}
             value={this.state.password}
             onChangeText={this.passwordChangedHandler}
             />
            <TouchableOpacity style={styles.placeButton}>
              <Text  style={{color: '#ffffff', fontWeight: 'bold'}} >Log In</Text>
             </TouchableOpacity>
            <View style={{marginTop: 100, flexDirection: 'row'}}>
              <Text  style={{color: '#787878', fontWeight:'100'}} >Don't have an account?</Text>
              <TouchableOpacity>
                <Text  style={{marginLeft:5, fontWeight: '500'}} >Sign up</Text>
               </TouchableOpacity>
             </View>
       </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  inputContainer: {
    marginBottom:10,
    padding: 10,
    height: '5%',
    width: '70%',
    borderRadius: 20,
    justifyContent: 'space-between',
    backgroundColor:"white",
  },
  placeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '5%',
    width: '70%',
    borderRadius: 20,
    marginTop: 10,
    backgroundColor:"#787878",
  }
});