import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Login from "../components/Login";
import Signup from "../components/Signup";
import AppContext from "../context/AppContext";

import styles from "../styles";

const StartScreen = ({ navigation }) => {
  const {
    state: { isLoginForm, isLogged, isGuest },
    enterAsGuest,
  } = useContext(AppContext);

  useEffect(() => {
    if (isLogged || isGuest) {
      navigation.navigate("Home");
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }, [isLogged, isGuest]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: 50,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {/* <SafeAreaView style={styles.container}> */}
        <Text style={styles.title}>
          Diabet<Text style={{ color: "#8DD8DD" }}>less</Text>
        </Text>
        <Image source={require("../../assets/start.png")} />
        <Text style={styles.description}>
          Control the food that you eat and the insulin that you take
        </Text>
        {isLoginForm ? <Login /> : <Signup />}
        <Text style={styles.green} onPress={enterAsGuest}>
          Continue as a guest
        </Text>
        <Text>{"\n\n\n"}</Text>
        <Text style={styles.developed}>Developed by TeamApp3 at KU</Text>
        {/* </SafeAreaView> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
/*
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // marginTop: 50,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#05666C",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    padding: 10,
    color: "#575757",
    lineHeight: 25,
  },
  guest: {
    color: "#05666C",
    fontWeight: "600",
    padding: 20,
  },
  developed: {
    color: "gray",
  },
});*/

export default StartScreen;
