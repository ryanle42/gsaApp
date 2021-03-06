import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default class RegisterForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.emailContainer}>
          <Image
            style={styles.emailIcon}
            source={require("../../images/Email-Icon.png")}
          />
          <TextInput
            style={styles.emailInput}
            placeholder={"Email"}
            placeholderTextColor={"#a0aab6"}
            underlineColorAndroid={"#2a405c"}
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={this.props.email}
            blurOnSubmit={false}
            onChangeText={text => this.props.onEmailChange(text)}
          />
        </View>
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
            onSubmitEditing={() => this.confirmPassInput.focus()}
            value={this.props.password}
            blurOnSubmit={false}
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
            ref={input => (this.confirmPassInput = input)}
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
  emailContainer: {
    marginBottom: 10
  },
  emailIcon: {
    width: 25,
    height: 22,
    marginLeft: 5
  },
  emailInput: {
    height: 50,
    width: 320,
    fontSize: 17,
    paddingLeft: 47,
    paddingBottom: 20,
    marginTop: -30,
    color: "white"
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
