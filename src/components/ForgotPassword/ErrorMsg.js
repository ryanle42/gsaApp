import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

export default class ErrorMsg extends Component {
  render() {
    const message = this.props.message ? this.props.message : ' ';
    const color = this.props.color ? this.props.color : '#fc4403';
    return (
      <View style={styles.container}>
        <Text style={{ color: color }}>
          {message}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 45
  }
});