import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import VerifyEmail from './src/components/VerifyEmail/VerifyEmail';
import ForgotPassword from './src/components/ForgotPassword/ForgotPassword';
import ResetSent from './src/components/ResetSent/ResetSent';
import PasswordReset from './src/components/PasswordReset/PasswordReset';
import Home from './src/components/Home/Home';

const Application = StackNavigator({
  Login: { screen: Login },
  ForgotPassword: { screen: ForgotPassword },
  ResetSent: { screen: ResetSent },
  PasswordReset: { screen: PasswordReset },
  Register: { screen: Register },
  VerifyEmail: { screen: VerifyEmail },
  Home: {screen: Home},
  }, {
    navigationOptions: {
      header: false
    }
});

export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}

const styles = StyleSheet.create({

});
