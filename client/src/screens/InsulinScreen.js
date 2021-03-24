import React, { useState, useEffect, useReducer, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import InsulinEnterComponent from "../components/InsulinEnter";
import InsulinDeleteComponent from "../components/InsulinDelete";

import AsyncStorage from '@react-native-async-storage/async-storage';

import Day from "../model/Day";
import Insulin from "../model/Insulin";
import styles from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppContext from "../context/AppContext";

const Stack = createStackNavigator();

const InsulinScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Insulin">
      <Stack.Screen name="Insulin" component={InsulinMainComponent} />
      <Stack.Screen name="InsulinEnter" component={InsulinEnterComponent} />
      <Stack.Screen name="InsulinDelete" component={InsulinDeleteComponent} />
    </Stack.Navigator>
  );
};


const InsulinMainComponent = ({ navigation }) => {
  const { insulin,getInsulin } = useContext(AppContext);
  var insulinItems = [];
  useEffect(()=>{
    getInsulin();
    for (let i = 0; i < insulin.length; i++) {
      const element = insulin[i];
      insulinItems.push(
      <View>
        <Text>{element.Datetime}</Text>
        <Text>{element.type} {insulin[i].amount}</Text>
        <Button onPress={() => { navigation.navigate("InsulinDelete", { i: element }); }}><Ionicons name="trash" /></Button>
      </View>);
    }
  });
  
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Main screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("InsulinEnter") }}>
        <Text style={styles.buttonLabel}>Add new Insulin item</Text>
      </TouchableOpacity>
      <View>
        {insulin == [] ? <Text>No insulin to show</Text> : insulinItems}
        <TouchableOpacity title="Delete insulin" onPress={() => { navigation.navigate("InsulinDelete", { day: days, i: insulin }) }}>
          <Image source={require("../../assets/trash.png")} style={styles.smallImage}/>
        </TouchableOpacity>
      </View>
      <Text>Insulin graph goes here</Text>
    </View>);
};

export default InsulinScreen;
