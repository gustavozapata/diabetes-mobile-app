import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, TextInput } from "react-native";

const Stack = createStackNavigator();

const InsulinScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Insulin" component={InsulinMainComponent} />
      <Stack.Screen name="InsulinEnter" component={InsulinEnterComponent} />
    </Stack.Navigator>
  );
};

const InsulinMainComponent = ({ navigation, route }) => {
  return (<View>
    <Text>Main screen</Text>
    <Text>Insulin graph goes here</Text>
    </View>);
};

export default InsulinScreen;
