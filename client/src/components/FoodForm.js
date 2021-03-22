import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import AppContext from "../context/AppContext";

import styles from "../styles";
import FoodQuantity from "./FoodQuantity";

const FoodForm = () => {
  const {
    state: { foodItem, foodQuantityManual },
    handleFoodItem,
    enterMeal,
  } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ textAlign: "center" }}>Enter Food manually</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {/* ITERATE THROUGH ALL ITEMS OF FOODITEM OBJECT */}
          {Object.keys(foodItem).map((item, i) => (
            <View key={i} style={{ margin: 10 }}>
              <Text style={styles.label}>{item}</Text>
              <TextInput
                keyboardType={item === "Name" ? "default" : "numeric"}
                style={[
                  styles.input,
                  item === "Name" ? styles.foodInput : styles.input,
                ]}
                value={foodItem[item]}
                onChangeText={(value) => handleFoodItem(value, item)}
              />
            </View>
          ))}
        </View>
        <FoodQuantity isManual={true} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterMeal({
              meal: foodItem.Name,
              quantity: foodQuantityManual,
              nutrients: {
                calories: foodItem.Calories + " kcal",
                protein: foodItem.Protein + " gram",
                fat: foodItem.Fat + " gram",
                carbs: foodItem.Carbs + " gram",
                fibre: foodItem.Fibre + " gram",
              },
            });
          }}
        >
          <Text style={[styles.buttonLabel, { marginBottom: 100 }]}>
            Enter manually
          </Text>
        </TouchableOpacity>
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
