import React, { useContext } from "react";
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
import AppContext from "../context/AppContext";
import FoodForm from "../components/FoodForm";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "../styles";

const EnterMealScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Meal" component={MainScreen} />
    </Stack.Navigator>
  );
};

const MainScreen = () => {
  const {
    state: { showResults, showFoodForm },
    toggleShowForm,
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
        <View>
          <Text style={styles.title}>Enter Meal</Text>
          <Text>
            Use the search bar to find the food item or use the form to enter
            one manually
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <SearchBar />
          {showResults ? (
            <FoodResults />
          ) : (
            <Text style={styles.description}>
              Type in the item you want to get information for
            </Text>
          )}
          <View
            style={{
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginVertical: 30,
            }}
          ></View>
          <FoodForm />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

//wrapper
//description

export default EnterMealScreen;
