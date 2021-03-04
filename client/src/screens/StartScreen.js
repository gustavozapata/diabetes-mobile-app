import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import Login from "../components/Login";

const StartScreen = () => {
  return (
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
        <Login />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "space-between",
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
  },
});

export default StartScreen;
