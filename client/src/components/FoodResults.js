import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/AppContext";

const FoodResults = () => {
  const {
    state: { foodResults, foodNutrients, isLoading, notFound },
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
                style={styles.image}
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
    width: 190,
    height: 190,
    borderWidth: 2,
    borderColor: "#05666C",
    marginBottom: 15,
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

export default FoodResults;
