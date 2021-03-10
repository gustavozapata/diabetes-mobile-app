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
        <TextInput onChangeText={() => {}}/>
      </View>
      <View>
        <Text>Insulin Type</Text>
        <TextInput onChangeText={() => {}}/>
      </View>
      <View>
        <Text>Dosage (Amount)</Text>
        <TextInput onChangeText={() => {}}/>
      </View>
      <Button></Button>
    </View>
  );
}

export default InsulinEnterComponent;