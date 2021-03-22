import React, { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import AppContext from "../context/AppContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles";

const FoodQuantity = ({ isManual }) => {
  const {
    state: { foodQuantity, foodQuantityManual },
    handleFoodQuantity,
  } = useContext(AppContext);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Ionicons
          name="chevron-up"
          size={30}
          color="#05666C"
          onPress={() => handleFoodQuantity(isManual, "more")}
        />
        <TextInput
          style={[styles.input, { textAlign: "center", marginHorizontal: 10 }]}
          keyboardType="numeric"
          value={`${isManual ? foodQuantityManual : foodQuantity}`}
          editable={false}
          //   onChangeText={(value) => handleFoodQuantity(value)}
        />
        <Ionicons
          name="chevron-down"
          size={30}
          color="#05666C"
          onPress={() => handleFoodQuantity(isManual, "less")}
        />
      </View>
      <Text>Quantity</Text>
    </View>
  );
};

export default FoodQuantity;
