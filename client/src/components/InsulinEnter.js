import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import AppContext from "../context/AppContext";
import styles from "../styles";

const InsulinEnterComponent = ({ navigation }) => {
  const {
    state: { insulinItem },
    handleInsulin,
    enterInsulin,
  } = useContext(AppContext);

  return (
    <View style={{ backgroundColor: "#fff", padding: 20, flexGrow: 1 }}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Enter Insulin</Text>
      <View>
        <Text style={styles.label}>Insulin Type</Text>
        <TextInput
          style={styles.inputBig}
          onChangeText={(v) => handleInsulin(v, "insulin")}
        />
      </View>
      <View>
        <Text style={styles.label}>Dosage (Amount)</Text>
        <TextInput
          style={styles.input}
          onChangeText={(v) => handleInsulin(v, "dosage")}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          enterInsulin(insulinItem);
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonLabel}>Add new Insulin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InsulinEnterComponent;
