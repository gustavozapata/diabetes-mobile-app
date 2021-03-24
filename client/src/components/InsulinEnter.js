import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button,
  StatusBar,
  TouchableOpacity
} from "react-native";
import AppContext from "../context/AppContext";
import styles from "../styles";

import AsyncStorage from '@react-native-async-storage/async-storage';

/*
const storeInsulin = async(value) => {
  try{
    const jsonObject = JSON.stringify(value);
    await AsyncStorage.setItem("@Insulin",jsonObject);
  } catch(e){ }
}*/

const InsulinEnterComponent = ({navigation}) => {
  const {enterInsulin} = useContext(AppContext);

  const [time,setTime] = useState("");
  const [amount,setAmount] = useState(0);
  const [insulinType,setInsulinType] = useState("");
  return (
    <View>
      <StatusBar style="auto" />
      <Text style={styles.title}>Enter Insulin</Text>
      <View>
        <Text style={styles.label}>Time</Text>
        <TextInput style={styles.input} onChangeText={(v) => { setTime(v);}}/>
      </View>
      <View>
        <Text style={styles.label}>Insulin Type</Text>
        <TextInput style={styles.input} onChangeText={(v) => { setInsulinType(v);}}/>
      </View>
      <View>
        <Text style={styles.label}>Dosage (Amount)</Text>
        <TextInput style={styles.input} onChangeText={(v) => { setAmount(v);}}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
        let i = {
          time:time,
          amount:amount,
          type:insulinType
        };
        enterInsulin(i);
        navigation.goBack();
        }}>
        <Text style={styles.buttonLabel}>Add new Insulin</Text>
      </TouchableOpacity>
    </View>
  );
}

export default InsulinEnterComponent;