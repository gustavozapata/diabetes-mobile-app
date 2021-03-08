import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Keyboard,
} from "react-native";
import AppContext from "../context/AppContext";

const Login = () => {
  const {
    state: { email, password, serverMsg },
    toggleLoginForm,
    handleEmail,
    handlePassword,
    login,
  } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => handleEmail(value)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => handlePassword(value)}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          login(email, password);
          Keyboard.dismiss();
        }}
      >
        <Text style={styles.buttonLabel}>Login</Text>
      </TouchableHighlight>
      <Text style={styles.serverMsg}>{serverMsg}</Text>
      <Text style={styles.switchForm} onPress={() => toggleLoginForm(false)}>
        Don't have an account? <Text style={styles.action}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#dedede",
    elevation: 5,
    padding: 14,
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
    zIndex: 100,
  },
  buttonLabel: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#05666C",
    borderRadius: 5,
    padding: 10,
  },
  switchForm: {
    paddingVertical: 20,
    fontSize: 14,
  },
  action: {
    color: "#05666C",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  serverMsg: {
    marginTop: 10,
    color: "red",
    textAlign: "center",
  },
});

export default Login;
