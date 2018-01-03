import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import ErrorMsg from './ErrorMsg';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Home');
    }
  }

  login = () => {
    fetch('http://192.168.1.23:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }
    })
    .then((response) => response.json())
    .then((res) => {
      if (res.success === true) {
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('Home');
      } else {
        this.setState({errorMsg: 'There was an error'});
      }
    })
    .done();
  }
  emailChangeHandler = async (text) => {
    await this.setState({email: text});
  }

  passwordChangeHandler = async (text) => {
    await this.setState({password: text});
  }

  render() {
    let navigation = this.props.navigation;
    return (
      <KeyboardAvoidingView 
        behavior='padding'
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
        <LoginForm 
          email={this.state.email}
          password={this.state.password}
          onEmailChange={this.emailChangeHandler.bind(this)}
          onPasswordChange={this.passwordChangeHandler.bind(this)}
        />
        <TouchableOpacity 
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotPass}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.haveAccount}>
            Don't have an account?
            <Text 
              style={styles.register}
              onPress={() => navigation.navigate('Register')}
            >
              {' Register'}
            </Text>
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.signInButton}
          onPress={this.login}
        >
          <Text style={styles.signIn}>
            Sign In
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  forgotPass: {
    textAlign: 'right',
    marginRight: 50,
    marginTop: 5,
    color: '#8894a4'
  },
  registerContainer: {
    marginTop: 110
  },
  haveAccount: {
    fontSize: 15,
    textAlign: 'center',
    color: '#8894a4',
  },
  register: {
    color: '#f0f0f0',
    paddingLeft: 10
  },
  signInButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0082a2',
    marginTop: 30,
    padding: 22
  },
  signIn: {
    color: '#f0f0f0',
    fontSize: 17,
    fontWeight: '400',
  }
});