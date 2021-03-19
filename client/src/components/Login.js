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

import styles from "../styles";

const Login = () => {
  const {
    state: { email, password, serverMsg },
    toggleLoginForm,
    handleEmail,
    handlePassword,
    login,
  } = useContext(AppContext);

  return (
    <View style={styles.startScreenWrapper}>
      {/* FIXME: DELETE LOGIN() - ONLY FOR DEV */}
      <Text style={styles.title} onPress={() => login("tavo@mail.com", "123")}>
        Login
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.inputBig}
        value={email}
        onChangeText={(value) => handleEmail(value)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.inputBig}
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

export default Login;
