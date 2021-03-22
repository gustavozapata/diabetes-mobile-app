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
import InfoBar from "./InfoBar";
import FoodQuantity from "./FoodQuantity";

const FoodResults = () => {
  const {
    state: {
      foodNutrients,
      isLoading,
      notFound,
      searchFoodTerm,
      isGuest,
      foodQuantity,
    },
    enterMeal,
  } = useContext(AppContext);

  return (
    <View style={styles2.container}>
      <Text style={styles.title}>Results</Text>
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
            <View key="2" style={styles2.resultContainer}>
              <Image
                style={styles2.image}
                source={{ uri: foodNutrients.image }}
              />
              <InfoBar
                title="Calories"
                value={foodNutrients.nutrients.ENERC_KCAL + " kcal"}
              />
              <InfoBar
                title="Protein"
                value={foodNutrients.nutrients.PROCNT + " gram"}
              />
              <InfoBar
                title="Fat"
                value={foodNutrients.nutrients.FAT + " gram"}
              />
              <InfoBar
                title="Carbs"
                value={foodNutrients.nutrients.CHOCDF + " gram"}
              />
              <InfoBar
                title="Fibre"
                value={foodNutrients.nutrients.FIBTG + " gram"}
              />

              {!isGuest && (
                <View style={{ alignItems: "center" }}>
                  <FoodQuantity isManual={false} />
                  <TouchableHighlight
                    style={styles.button}
                    onPress={() =>
                      enterMeal({
                        meal: searchFoodTerm,
                        quantity: foodQuantity,
                        nutrients: {
                          calories:
                            foodNutrients.nutrients.ENERC_KCAL + " kcal",
                          protein: foodNutrients.nutrients.PROCNT + " gram",
                          fat: foodNutrients.nutrients.FAT + " gram",
                          carbs: foodNutrients.nutrients.CHOCDF + " gram",
                          fibre: foodNutrients.nutrients.FIBTG + " gram",
                        },
                      })
                    }
                  >
                    <Text style={styles2.buttonLabel}>Enter result</Text>
                  </TouchableHighlight>
                </View>
              )}
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
  resultContainer: {
    alignItems: "center",
  },
  buttonLabel: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#05666C",
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    fontWeight: "500",
    width: 220,
  },
});

export default FoodResults;

//buttonlabel
//
