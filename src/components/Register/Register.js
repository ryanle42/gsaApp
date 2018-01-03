import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import ErrorMsg from './ErrorMsg';
import RegisterForm from './RegisterForm';
import validator from 'validator';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  async emailChangeHandler(text) {
    await this.setState({ email: text });
  }

  async passwordChangeHandler(text) {
    await this.setState({ password: text });
  }

  async confirmPasswordChangeHandler(text) {
    await this.setState({ confirmPassword: text });
  }

  onSubmit() {
    if (this.state.password != this.state.confirmPassword) {
      this.setState({errorMsg: 'Passwords do not match'});
    } else if (validator.isEmail(this.state.email) == false) {
      this.setState({ errorMsg: 'Please enter a valid email' });      
    } else {
      this.props.navigation.navigate('VerifyEmail', {email: this.state.email});
    }
  }

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={styles.container}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')} />
        </View>
        <ErrorMsg
          message={this.state.errorMsg}
          color={null}
        />
        <RegisterForm 
          email={this.state.email}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          onEmailChange={this.emailChangeHandler.bind(this)}
          onPasswordChange={this.passwordChangeHandler.bind(this)}
          onConfirmPasswordChange={this.confirmPasswordChangeHandler.bind(this)}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.onSubmit()}
        >
          <Text style={styles.signIn}>
            Register
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122b4a'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  logo: {
    height: 150,
    width: 180
  },
  submitButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0082a2',
    marginTop: 142,
    padding: 22
  },
  signIn: {
    color: '#f0f0f0',
    fontSize: 17,
    fontWeight: '400',
  }
});