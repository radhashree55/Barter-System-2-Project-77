import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import db from "../config";
import firebase from "firebase";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        return Alert.alert("Successfully Logged in");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  userSignUp = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        return Alert.alert("Successfully Added User");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.title}>Barter System App</Text>
          <Image
            source={require("../assets/image.png")}
            style={{ width: 300, height: 260 }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.loginBox}
            placeholder="Username"
            placeholderTextColor="black"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                username: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.username, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.username, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender",
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "300",
    paddingBottom: 30,
    color: "mediumorchid",
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "violet",
    fontSize: 20,
    margin: 10,
    paddingLeft: 100,
    // marginTop: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "violet",
    shadowColor: "#100",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: "black",
    fontWeight: "200",
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
});
