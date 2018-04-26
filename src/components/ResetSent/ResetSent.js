import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default class ResetSent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../images/logo.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Instructions have been sent to</Text>
          <Text style={styles.textStyle}>{"pointtpoint@gmail.com"}</Text>
          <Text style={styles.textStyle}>
            Please check your inbox to complete the password reset
          </Text>
        </View>
      </View>
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
    marginTop: 70
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "#ebebeb",
    marginTop: 15
  }
});
