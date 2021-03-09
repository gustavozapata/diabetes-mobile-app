import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/AppContext";

const InsulinEnterComponent = ({navigation, route}) => {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>Enter Insulin</Text>
      <View>
        <Text>Time</Text>
        <TextInput />
      </View>
      <View>
        <Text>Insulin Type</Text>
        <TextInput />
      </View>
      <View>
        <Text>Dosage (Amount)</Text>
        <TextInput />
      </View>
    </View>
  );
}

export default InsulinEnterComponent;