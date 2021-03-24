import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
} from "react-native";
import AppContext from "../context/AppContext";
import ViewHeader from "../components/ViewHeader";

import styles from "../styles";

const InsulinScreenTavo = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Insulin" component={MainScreen} />
    </Stack.Navigator>
  );
};

const MainScreen = () => {
  const {
    state: { insulinItem },
    handleInsulin,
    enterInsulin,
  } = useContext(AppContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ViewHeader
          title="Enter Insulin"
          description="Enter the type of insuling and the dosage"
        />
        <View style={{ marginTop: 20, width: "100%" }}>
          <Text style={styles.label}>Insulin Type</Text>
          <TextInput
            style={innerStyles.input}
            value={insulinItem.insulin}
            onChangeText={(value) => handleInsulin(value, "insulin")}
          />
          <Text style={styles.label}>Dosage (Amount)</Text>
          <TextInput
            keyboardType="numeric"
            style={innerStyles.input}
            value={insulinItem.dosage}
            onChangeText={(value) => handleInsulin(value, "dosage")}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (insulinItem.insulin !== "" && insulinItem.dosage !== "") {
                enterInsulin(insulinItem);
              }
            }}
          >
            <Text style={[styles.buttonLabel, { marginTop: 15 }]}>
              Enter insulin
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const innerStyles = StyleSheet.create({
  input: {
    padding: 8,
    width: "100%",
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#aaa",
  },
});

export default InsulinScreenTavo;
