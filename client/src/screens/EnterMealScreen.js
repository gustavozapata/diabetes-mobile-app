import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import SearchBar from "../components/SearchBar";
import FoodResults from "../components/FoodResults";

const EnterMealScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Meal" component={MainScreen} />
    </Stack.Navigator>
  );
};

const MainScreen = () => {
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
        <View>
          <Text style={styles.title}>Enter Meal</Text>
          <Text>
            Use the search bar to find the food item or use the form to enter
            one manually
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <SearchBar />
          <FoodResults />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 6,
  },
});

export default EnterMealScreen;
