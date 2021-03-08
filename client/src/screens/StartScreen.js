import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Login from "../components/Login";
import Signup from "../components/Signup";
import AppContext from "../context/AppContext";

const StartScreen = () => {
  const {
    state: { isLoginForm },
  } = useContext(AppContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>
            Diabet<Text style={{ color: "#8DD8DD" }}>less</Text>
          </Text>
          <Image source={require("../../assets/start.png")} />
          <Text style={styles.description}>
            Control the food that you eat and the insulin that you take
          </Text>
          {isLoginForm ? <Login /> : <Signup />}
          <Text style={styles.guest}>Continue as a guest</Text>
          <Text style={styles.developed}>Developed by TeamApp3 at KU</Text>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 33,
    fontWeight: "700",
    color: "#05666C",
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    padding: 10,
    color: "#575757",
    lineHeight: 28,
  },
  guest: {
    color: "#05666C",
    fontWeight: "600",
  },
  developed: {
    color: "gray",
  },
});

export default StartScreen;
