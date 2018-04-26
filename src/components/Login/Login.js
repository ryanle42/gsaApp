import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import ErrorMsg from "./ErrorMsg";
import LoginForm from "./LoginForm";
import validator from "validator";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      errorMsg: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem("user");
    if (value !== null) {
      this.props.navigation.navigate("Home");
    }
  };

  login = () => {
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ errorMsg: "" });
    } else {
      this.setState({ loading: true });
      fetch("http://64.62.224.29:3000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(res => {
          if (res.success === true) {
            AsyncStorage.setItem("user", res.user);
            // this.props.navigation.navigate('Home');
            this.setState({ errorMsg: "" });
          } else {
            this.setState({ errorMsg: res.errorMsg });
          }
        })
        .catch(error => {
          this.setState({ errorMsg: "There was an error" });
        })
        .then(() => this.setState({ loading: false }))
        .done();
    }
  };

  emailChangeHandler = async text => {
    await this.setState({ email: text });
  };

  passwordChangeHandler = async text => {
    await this.setState({ password: text });
  };

  render() {
    let navigation = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../images/logo.png")}
          />
        </View>
        <ErrorMsg message={this.state.errorMsg} color={null} />
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          onEmailChange={this.emailChangeHandler.bind(this)}
          onPasswordChange={this.passwordChangeHandler.bind(this)}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPass}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.haveAccount}>
            Don't have an account?
            <Text
              style={styles.register}
              onPress={() => navigation.navigate("Register")}
            >
              {" Register"}
            </Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.signInButton} onPress={this.login}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
        {this.state.loading && (
          <ActivityIndicator size="large" style={styles.loading} />
        )}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#122b4a"
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50
  },
  logo: {
    height: 150,
    width: 180
  },
  forgotPass: {
    textAlign: "right",
    marginRight: 50,
    marginTop: 5,
    color: "#8894a4"
  },
  registerContainer: {
    marginTop: 110
  },
  haveAccount: {
    fontSize: 15,
    textAlign: "center",
    color: "#8894a4"
  },
  register: {
    color: "#f0f0f0",
    paddingLeft: 10
  },
  signInButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0082a2",
    marginTop: 30,
    padding: 22
  },
  signIn: {
    color: "#f0f0f0",
    fontSize: 17,
    fontWeight: "400"
  }
});
