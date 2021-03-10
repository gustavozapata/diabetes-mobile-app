import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/AppContext";

import styles from "../styles";

const Signup = () => {
  const {
    state: { email, password, serverMsg },
    toggleLoginForm,
    handleEmail,
    handlePassword,
    signup,
  } = useContext(AppContext);

  return (
    <View style={styles.startScreenWrapper}>
      <Text style={styles.title}>Signup</Text>
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
        onPress={() => signup(email, password)}
      >
        <Text style={styles.buttonLabel}>Signup</Text>
      </TouchableHighlight>
      <Text style={styles.serverMsg}>{serverMsg}</Text>
      <Text style={styles.switchForm} onPress={() => toggleLoginForm(true)}>
        Already have an account? <Text style={styles.action}>Login</Text>
      </Text>
    </View>
  );
};

export default Signup;
