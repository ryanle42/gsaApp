import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView
} from "react-native";
import ErrorMsg from "./ErrorMsg";

export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: "",
      email: "",
      password: ""
    };
  }

  onSubmit() {
    this.props.navigation.navigate("ResetSent");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../images/logo.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Forgot your password?</Text>
          <Text style={styles.textStyle}>
            {"We'll send you instructions on\nhow" + " to reset your password"}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder={"Email"}
            placeholderTextColor={"#a0aab6"}
            underlineColorAndroid={"#2a405c"}
            returnKeyType="go"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => this.onSubmit()}
          >
            <Text style={styles.buttonText}>Send Reset</Text>
          </TouchableOpacity>
        </View>
        <ErrorMsg message={this.state.errorMsg} color={null} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#122b4a"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50
  },
  logo: {
    height: 150,
    width: 180
  },
  textContainer: {
    marginTop: 50,
    marginBottom: 50
  },
  textStyle: {
    textAlign: "center",
    color: "#ebebeb",
    fontSize: 18,
    marginBottom: 10
  },
  inputContainer: {
    alignItems: "center"
  },
  emailInput: {
    textAlign: "center",
    height: 50,
    width: 320,
    fontSize: 22,
    marginTop: -30,
    color: "white"
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center"
  },
  sendButton: {
    justifyContent: "center",
    width: 270,
    height: 55,
    backgroundColor: "#0082a2",
    marginTop: 42,
    padding: 22,
    borderRadius: 50
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white"
  }
});
