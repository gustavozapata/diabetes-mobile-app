import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";

const FoodResults = () => {
  const {
    state: { foodResults, foodNutrients, isLoading },
  } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      {/* <View>
        {foodResults > 0 && foodResults.map((item) => <Text>{item}</Text>)}
      </View> */}
      {isLoading ? (
        <Image
          source={require("../../assets/loading.gif")}
          style={{ width: 130, height: 130 }}
        />
      ) : (
        <View>
          <Image style={styles.image} source={{ uri: foodNutrients.image }} />
          <Text>ENERC_KCAL: {foodNutrients.nutrients.ENERC_KCAL}</Text>
          <Text>PROCNT: {foodNutrients.nutrients.PROCNT}</Text>
          <Text>FAT: {foodNutrients.nutrients.FAT}</Text>
          <Text>CHOCDF: {foodNutrients.nutrients.CHOCDF}</Text>
          <Text>FIBTG: {foodNutrients.nutrients.FIBTG}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 15,
  },
  title: {
    fontSize: 24,
    color: "#05666C",
    fontWeight: "600",
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "#05666C",
    marginBottom: 15,
  },
});

export default FoodResults;
