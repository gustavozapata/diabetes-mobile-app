import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

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
    <View>
      <Text>Enter Meal</Text>
    </View>
  );
};

export default EnterMealScreen;
