import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/AppContext";

import styles from "../styles";

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

//button
//buttonlabel
//foodInput
//input
//container

export default FoodForm;
