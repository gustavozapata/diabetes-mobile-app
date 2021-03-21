import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import InsulinEnterComponent from "../components/InsulinEnterComponent";
import InsulinDeleteComponent from "../components/InsulinDeleteComponent";

import AsyncStorage from '@react-native-async-storage/async-storage';

import Day from "../model/Day";

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

const InsulinMainComponent = ({ navigation, route }) => {
  const [days, setDay] = useState([]);
  useEffect(() => {
    async () =>{
      try{
        let d = JSON.parse(AsyncStorage.getItem("Days"));
        if(d == null){
          let today = new Day();
          await AsyncStorage.setItem("Days",JSON.stringify(today));
          setDay([today]);
        }
        setDay(d);
        currentDay = days.length - 1;
      } catch(error){
        console.log(error);
      }
    }
    /*
    for (let i = 0; i < days[currentDay].Insulin.length; i++) {
      const element = days.Insulin[i];
      insulinItems.push(<View>
        <Text>{days.Insulin[i].Datetime}</Text><Text>{days.Insulin[i].type} {days.Insulin[i].amount}</Text><Button onPress={() => { navigation.navigate("InsulinDelete", { day: days, i: element }); }}><Ionicons name="trash" /></Button>
      </View>);
    }*/
  });

  var currentDay = 0;
  // Get all items in a day
  var insulinItems = [];
  

  return (
    <View>
      <Text>Main screen</Text>
      <Button title="" onPress={() => { navigation.navigate("InsulinEnter", { day: days }) }} />
      <View>
        {insulinItems == [] ? <Text>No insulin to show</Text> : insulinItems}
        <Button title="" onPress={() => { navigation.navigate("InsulinDelete", { day: days, i: days.Insulin }) }} />
      </View>
      <Button title="<-1 week" onPress={() => { }} />
      <Button title="1 week->" onPress={() => { }} />
      <Text>Insulin graph goes here</Text>
    </View>);
};

export default InsulinScreen;
