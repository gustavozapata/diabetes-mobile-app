import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Login from "../components/Login";
import Signup from "../components/Signup";
import AppContext from "../context/AppContext";

import styles from "../styles";

const StartScreen = ({ navigation, access }) => {
  const {
    state: { isLoginForm, isLogged, isGuest },
    enterAsGuest,
    goBackToStart,
  } = useContext(AppContext);

  useEffect(() => {
    if (access) {
      goBackToStart();
      navigation.navigate("Start");
    } else {
      if (isLogged || isGuest) {
        navigation.navigate("Nav");
        navigation.reset({
          index: 0,
          routes: [{ name: "Nav" }],
        });
      }
    }
  }, [isLogged, isGuest, access]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: 50,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {/* <SafeAreaView style={styles.container}> */}
        <Text style={innerStyles.title}>
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
        <Text style={innerStyles.developed}>Developed by TeamApp3 at KU</Text>
        <View style={{ height: 120 }}></View>
        {/* </SafeAreaView> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const innerStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#05666C",
    fontWeight: "600",
    marginBottom: 15,
  },
  developed: {
    marginTop: 0,
  },
});

export default StartScreen;
