import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button,
} from "react-native";
import AppContext from "../context/AppContext";

const InsulinDeleteComponent = ({navigation, route}) => {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>Do you want to delete this record?</Text>
      <View>
        <Text>Time</Text>
        <Text>{route.params.time}</Text>
      </View>
      <View>
        <Text>Insulin Type</Text>
        <Text>{route.params.type}</Text>
      </View>
      <View>
        <Text>Dosage (Amount)</Text>
        <Text>{route.params.dosage}</Text>
      </View>
      <Button title="Don't delete" onPress={() => { navigation.goBack(); }}/>
      <Button title="Delete" onPress={() => {
        let d = route.params.day;
        d.removeInsulin(route.params.i);
        navigation.navigate("Insulin",{day:d});
        }}/>
    </View>
  );
}

export default InsulinDeleteComponent;