import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AppContext from "../context/AppContext";

import styles from "../styles";
import FoodQuantity from "./FoodQuantity";

const FoodForm = () => {
  const {
    state: { foodItem, foodQuantityManual },
    handleFoodItem,
    enterMeal,
  } = useContext(AppContext);

  const constructMealObject = () => {
    let nutrients = {};
    {
      Object.entries(foodItem).map(([key, value]) => {
        if (key !== "Name") {
          nutrients = {
            ...nutrients,
            [key.toLocaleLowerCase()]:
              value * foodQuantityManual + getMeasure(key),
          };
        }
      });
    }
    return {
      meal: foodItem.Name,
      quantity: foodQuantityManual,
      nutrients,
    };
  };

  const getMeasure = (nutrient) => {
    switch (nutrient) {
      case "Calories":
        return " kcal";
      default:
        return " gram";
    }
  };

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
            if (foodItem.Name !== "") {
              enterMeal(constructMealObject());
            }
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

export default FoodForm;
