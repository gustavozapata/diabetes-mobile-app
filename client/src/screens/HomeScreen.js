import React from "react";
import { View, Text, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  );
};

const MainScreen = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View>
        <StatusBar style="auto" />
        <Text>Dashboard</Text>
      </View>
    </>
  );
};

export default HomeScreen;
