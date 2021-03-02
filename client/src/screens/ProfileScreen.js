import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const ProfileScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={MainScreen} />
    </Stack.Navigator>
  );
};

const MainScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default ProfileScreen;
