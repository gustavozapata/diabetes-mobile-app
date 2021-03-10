import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/AppContext";

import styles from "../styles";

const FoodResults = () => {
  const {
    state: { foodResults, foodNutrients, isLoading, notFound },
  } = useContext(AppContext);

  return (
    <View style={styles2.container}>
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
        [
          notFound ? (
            <View key="1" style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/notfound.png")}
                style={{ width: 160, height: 160 }}
              />
              <Text>Sorry, we couldn't find that one</Text>
              <Text>You can enter the item manually</Text>
            </View>
          ) : (
            <View key="2">
              <Image
                style={styles2.image}
                source={{ uri: foodNutrients.image }}
              />
              <Text>Energy: {foodNutrients.nutrients.ENERC_KCAL} kcal</Text>
              <Text>Protein: {foodNutrients.nutrients.PROCNT} g</Text>
              <Text>Fat: {foodNutrients.nutrients.FAT} g</Text>
              <Text>Carbs: {foodNutrients.nutrients.CHOCDF} g</Text>
              <Text>Fiber: {foodNutrients.nutrients.FIBTG} g</Text>

              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonLabel}>Enter result</Text>
              </TouchableHighlight>
            </View>
          ),
        ]
      )}
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 15,
  },
  image: {
    width: 190,
    height: 190,
    borderWidth: 2,
    borderColor: "#05666C",
    marginBottom: 15,
  },
});

export default FoodResults;

//buttonlabel
//
