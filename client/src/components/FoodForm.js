import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/AppContext";

const FoodForm = () => {
  const {
    state: { foodItem },
    handleFoodItem,
  } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.label}>Food name</Text>
        <TextInput
          style={[styles.input, styles.foodInput]}
          value={foodItem.name}
          onChangeText={(value) => handleFoodItem(value)}
        /> */}
        <Text style={{ textAlign: "center" }}>Enter Food manually</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(foodItem).map((item, i) => (
            <View key={i} style={{ margin: 10 }}>
              <Text style={styles.label}>{item}</Text>
              <TextInput
                style={[
                  styles.input,
                  item === "Name" ? styles.foodInput : styles.input,
                ]}
                value={foodItem[item]}
                onChangeText={(value) => handleFoodItem(value)}
              />
            </View>
          ))}
        </View>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonLabel}>Enter manually</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 20,
    padding: 10,
  },
  label: {
    color: "#05666C",
    fontSize: 14,
    paddingTop: 12,
    fontWeight: "600",
  },
  input: {
    padding: 8,
    width: 80,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#aaa",
  },
  foodInput: {
    width: 280,
  },
  button: {
    marginTop: 20,
    borderRadius: 25,
    // width: 200,
  },
  buttonLabel: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#05666C",
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    fontWeight: "500",
  },
});

export default FoodForm;
