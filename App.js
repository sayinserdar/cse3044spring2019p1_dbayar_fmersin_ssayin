
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen } from './app/screens/Login';
import { HomeScreen } from './app/screens/Home';
import { SignupScreen } from './app/screens/Signup';
import { ProfileScreen } from './app/screens/Profile';

const MainNavigator = createStackNavigator(
  {
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  Profile: {screen: ProfileScreen},
  Signup: {screen: SignupScreen}

  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}