import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default class PasswordForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.lockIcon}
            source={require("../../images/Lock-Icon.png")}
          />
          <TextInput
            style={styles.passwordInput}
            placeholder={"Password"}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={"#a0aab6"}
            underlineColorAndroid={"#2a405c"}
            returnKeyType="next"
            ref={input => (this.passwordInput = input)}
            onSubmitEditing={() => this.confirmPasswordInput.focus()}
            value={this.props.password}
            onChangeText={text => this.props.onPasswordChange(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.confirmPasswordInput}
            placeholder={"Confirm Password"}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={"#a0aab6"}
            underlineColorAndroid={"#2a405c"}
            returnKeyType="go"
            ref={input => (this.confirmPasswordInput = input)}
            value={this.props.confirmPassword}
            onChangeText={text => this.props.onConfirmPasswordChange(text)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30
  },
  lockIcon: {
    width: 25,
    height: 28,
    marginLeft: 5
  },
  passwordInput: {
    height: 50,
    width: 320,
    fontSize: 17,
    paddingLeft: 47,
    paddingBottom: 20,
    marginTop: -30,
    color: "white"
  },
  confirmPasswordInput: {
    height: 50,
    width: 320,
    fontSize: 17,
    paddingLeft: 47,
    paddingBottom: 20,
    marginTop: 5,
    color: "white"
  }
});
