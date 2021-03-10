import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button
} from "react-native";
import AppContext from "../context/AppContext";

import Insulin from "../model/Insulin";

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeInsulin = async(value) => {
  try{
    const jsonObject = JSON.stringify(value);
    await AsyncStorage.setItem("@Insulin",jsonObject);
  } catch(e){ }
}

const InsulinEnterComponent = ({navigation,route}) => {
  const [time,setTime] = useState(new Date());
  const [insulinType,setInsulinType] = useState("");
  const [dosage,setDosage] = useState(0);
  return (
    <View>
      <StatusBar style="auto" />
      <Text>Enter Insulin</Text>
      <View>
        <Text>Time</Text>
        <TextInput onChangeText={(v) => { setTime(v);}}/>
      </View>
      <View>
        <Text>Insulin Type</Text>
        <TextInput onChangeText={(v) => { setInsulinType(v);}}/>
      </View>
      <View>
        <Text>Dosage (Amount)</Text>
        <TextInput onChangeText={(v) => { setDosage(v);}}/>
      </View>
      <Button title="Add new Insulin" onPress={() => {
        let i = new Insulin(time,insulinType,dosage);
        let d = route.params.day;
        d.addInsulin(i);
        navigation.goBack();
        }}/>
    </View>
  );
}

export default InsulinEnterComponent;