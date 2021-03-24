import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  StatusBar
} from "react-native";
import AppContext from "../context/AppContext";
import styles from "../styles";

const InsulinDeleteComponent = ({navigation, route}) => {
  return (
    <View>
      <StatusBar style="auto" />
      <Text style={styles.title}>Do you want to delete this record?</Text>
      <View>
        <Text style={styles.label}>Time</Text>
        <Text>{route.params.time}</Text>
      </View>
      <View>
        <Text style={styles.label}>Insulin Type</Text>
        <Text>{route.params.type}</Text>
      </View>
      <View>
        <Text style={styles.label}>Dosage (Amount)</Text>
        <Text>{route.params.dosage}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => { navigation.goBack(); }}>
        <Text style={styles.buttonLabel}>Don't delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        let d = route.params.day;
        d.removeInsulin(route.params.i);
        navigation.navigate("Insulin",{day:d});
        }}>
          <Text style={styles.buttonLabel}>Confirm and delete</Text>
        </TouchableOpacity>
    </View>
  );
}

export default InsulinDeleteComponent;