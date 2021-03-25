import React, { useState, useEffect, useReducer, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Image,Button } from "react-native";
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
    <Stack.Navigator initialRouteName="Insulin Menu">
      <Stack.Screen name="Insulin Menu" component={InsulinMainComponent} />
      <Stack.Screen name="InsulinEnter" component={InsulinEnterComponent} />
      <Stack.Screen name="InsulinDelete" component={InsulinDeleteComponent} />
    </Stack.Navigator>
  );
};


const InsulinMainComponent = ({ navigation }) => {
  const { state:{insulin},getInsulin,enterInsulin } = useContext(AppContext);
  //getInsulin();
  useEffect(()=>{
    const unsubscribe = navigation.addListener("focus", () => {
      //console.log("now focussed");
      getInsulin();
    });
    
    /*
    if(route.params?.delete == true){
      //insulin.splice(route.params?.insulin);
      deleteInsulin()
      console.log("deleted "+route.params?.insulin.Datetime+" - "+route.params?.insulin.type + " - " +route.params?.insulin.amount);
    }*/
    return unsubscribe;
  },[navigation]);
  var insulinItems = insulin.map((i) => 
  <View style={styles.insulinItem}>
    <Text>{i.date} - {i.insulin} - {i.dosage}</Text>
    {/*<TouchableOpacity onPress={() => { navigation.navigate("InsulinDelete", { id: i._id }); }}>
      <Image source={require("../../assets/trash.png")} style={styles.smallImage}/>
</TouchableOpacity>*/}
  </View>);
  //var insulinItems = [];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Main screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("InsulinEnter",{enterInsulin:enterInsulin}) }}>
        <Text style={styles.buttonLabel}>Add new Insulin item</Text>
      </TouchableOpacity>
      <View>
        {insulinItems}
      </View>
      {/*<Text>Insulin graph goes here</Text>*/}
    </View>);
};

export default InsulinScreen;
