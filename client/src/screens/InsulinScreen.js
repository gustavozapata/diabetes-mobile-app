import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, TextInput } from "react-native";

import { InsulinEnterComponent } from "../components/InsulinEnterComponent";
import { InsulinDeleteComponent } from "../components/InsulinDeleteComponent";

const Stack = createStackNavigator();

const InsulinScreen = () => {
  useEffect(() =>{

  });
  for (let i = 0; i < day.length; i++) {
    const element = array[i];
    
  }

  return (
      <Stack.Navigator initialRouteName="Insulin">
        <Stack.Screen name="Insulin" component={InsulinMainComponent} />
        <Stack.Screen name="InsulinEnter" component={InsulinEnterComponent} />
        <Stack.Screen name="InsulinDelete" component={InsulinDeleteComponent} />
      </Stack.Navigator>
  );
};

const InsulinMainComponent = ({ navigation, route }) => {
  return (<View>
    <Text>Main screen</Text>
    <Button title="" onPress={() => { navigation.navigate("InsulinEnter",{day:days})}}/>
    <View>
      <Text></Text>
      <Button title="" onPress={() => { navigation.navigate("InsulinDelete",{day:days, i: days.Insulin})}}/>
    </View>
    <Text>Insulin graph goes here</Text>
  </View>);
};

export default InsulinScreen;
