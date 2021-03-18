import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import SearchBar from "../components/SearchBar";
import FoodResults from "../components/FoodResults";
import AppContext from "../context/AppContext";
import FoodForm from "../components/FoodForm";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "../styles";
import EnterNewItem from "../components/EnterNewItem";

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
    state: { showResults, isGuest, hasJustEnteredMeal },
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
        <View style={{ width: "100%" }}>
          <Text style={styles.title}>Enter Meal</Text>
          <Text>Use the search bar to find the food item</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <SearchBar />
          {hasJustEnteredMeal ? (
            <EnterNewItem />
          ) : (
            <View>
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
              {!isGuest && <FoodForm />}
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

//wrapper
//description

export default EnterMealScreen;
