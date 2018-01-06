import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class VerifyEmail extends Component {
  componentWillMount() {
    this.props.navigation.goBack('Login');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            Almost done!
          </Text>
          <Text style={styles.textStyle}>
            We just need to verify your email
          </Text>
          <Text style={styles.textStyle}>
            A verification link has been sent to
            {`\n${this.props.navigation.state.params.email}`}
          </Text>
        </View>
      </View>
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
  textContainer: {
    marginTop: 70
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ebebeb',
    marginTop: 15
  }
});