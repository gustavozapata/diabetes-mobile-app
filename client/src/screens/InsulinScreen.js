import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { InsulinEnterComponent } from "../components/InsulinEnterComponent";
import { InsulinDeleteComponent } from "../components/InsulinDeleteComponent";

const Stack = createStackNavigator();

const InsulinScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Insulin">
        <Stack.Screen name="Insulin" component={InsulinMainComponent} />
        <Stack.Screen name="InsulinEnter" component={InsulinEnterComponent} />
        <Stack.Screen name="InsulinDelete" component={InsulinDeleteComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const InsulinMainComponent = ({ navigation, route }) => {
  return (<View>
    <Text>Main screen</Text>
    <Button title="" onPress={() => { navigation.navigate("InsulinEnter")}}/>
    <View>
      <Text></Text>
      <Button title="" onPress={() => { navigation.navigate("InsulinDelete")}}/>
    </View>
    <Text>Insulin graph goes here</Text>
  </View>);
};

export default InsulinScreen;
