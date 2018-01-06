import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import ErrorMsg from './ErrorMsg';
import RegisterForm from './RegisterForm';
import validator from 'validator';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
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
    if (
      this.state.password === '' || 
      this.state.confirmPassword === '' ||
      this.state.email === ''
    ) {
      this.setState({ errorMsg: 'Please enter all the fields' });
    } else if (this.state.password != this.state.confirmPassword) {
      this.setState({errorMsg: 'Passwords do not match'});
    } else if (validator.isEmail(this.state.email) == false) {
      this.setState({ errorMsg: 'Please enter a valid email' });      
    } else {
      this.setState({loading: true});
      fetch('http://192.168.1.23:3000/createUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          this.setState({errorMsg: ''});
          this.props.navigation.navigate('VerifyEmail', {email: this.state.email});
        } else {
          this.setState({errorMsg: res.errorMsg});
        }
      })
      .catch((error) => {
        this.setState({errorMsg: 'There was an error'});        
      })
      .then(() => this.setState({loading: false}))
      .done();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={-144}
        behavior='position'
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
        {this.state.loading &&
          <ActivityIndicator 
            size='large'
            style={styles.loading}
          />
        }
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122b4a'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
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
    justifyContent: 'center',
    backgroundColor: '#0082a2',
    marginTop: 146,
    padding: 32
  },
  signIn: {
    color: '#f0f0f0',
    fontSize: 17,
    fontWeight: '400',
  }
});