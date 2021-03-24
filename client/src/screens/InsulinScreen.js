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
    <Stack.Navigator initialRouteName="Insulin">
      <Stack.Screen name="Insulin" component={InsulinMainComponent} />
      <Stack.Screen name="InsulinEnter" component={InsulinEnterComponent} />
      <Stack.Screen name="InsulinDelete" component={InsulinDeleteComponent} />
    </Stack.Navigator>
  );
};


const InsulinMainComponent = ({ navigation,route }) => {
  //const { state:insulin,getInsulin } = useContext(AppContext);
  let insulin = [
    {Datetime:"23/03/2021", type:"fast acting", amount:10},
    {Datetime:"24/03/2021", type:"fast acting", amount:10},
    {Datetime:"24/03/2021", type:"slow acting", amount:40},
  ];
  let insulinItems = insulin.map((i) => 
  <View style={styles.insulinItem}>
    <Text>{i.Datetime} - {i.type} - {i.amount}</Text>
    <TouchableOpacity onPress={() => { navigation.navigate("InsulinDelete", { i: i }); }}>
      <Image source={require("../../assets/trash.png")} style={styles.smallImage}/>
    </TouchableOpacity>
  </View>
  );
  useEffect(()=>{
    if(route.params?.delete == true){
      insulin.splice(route.params?.insulin);
    }
  });
  
  
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Main screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("InsulinEnter") }}>
        <Text style={styles.buttonLabel}>Add new Insulin item</Text>
      </TouchableOpacity>
      <View>
        {/*insulinItems == [] ? insulinItems : <Text>No insulin to show</Text>*/}
        {insulinItems}
        <TouchableOpacity title="Delete insulin" onPress={() => { navigation.navigate("InsulinDelete", { day: days, i: insulin }) }}>
          
        </TouchableOpacity>
      </View>
      <Text>Insulin graph goes here</Text>
    </View>);
};

export default InsulinScreen;
