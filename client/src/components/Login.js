import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonLabel}>Login</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 5,
    padding: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: "#05666C",
    paddingBottom: 10,
  },
  input: {
    padding: 8,
    width: 300,
    // height: 35,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#aaa",
  },
  label: {
    color: "#05666C",
    fontSize: 14,
    paddingTop: 12,
    fontWeight: "600",
  },
  button: {
    marginTop: 20,
  },
  buttonLabel: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#05666C",
    borderRadius: 5,
    padding: 10,
  },
});

export default Login;
