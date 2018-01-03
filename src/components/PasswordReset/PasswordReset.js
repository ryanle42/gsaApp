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
import PasswordForm from './PasswordForm';

export default class PasswordReset extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: '',
      password: '',
      confirmPassword: ''
    }
  }

  async passwordChangeHandler(text) {
    await this.setState({ password: text });
  }

  async confirmPasswordChangeHandler(text) {
    await this.setState({ confirmPassword: text });
  }

  onSubmit() {
    this.props.navigation.navigate('ResetSent');
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
        <PasswordForm 
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          onPasswordChange={this.passwordChangeHandler.bind(this)}
          onConfirmPasswordChange={this.confirmPasswordChangeHandler.bind(this)}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.onSubmit}  
        >
          <Text style={styles.submitText}>
            Change Password
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
    marginTop: 194,
    padding: 22
  },
  submitText: {
    color: '#f0f0f0',
    fontSize: 17,
    fontWeight: '400',
  }
});