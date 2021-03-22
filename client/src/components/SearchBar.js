import React, { useContext } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppContext from "../context/AppContext";

import styles from "../styles";

//this component is found on the Library screen
//it renders a Text Input where users will be able to search for a book
const SearchBar = () => {
  const {
    state: { searchFoodTerm },
    handleSearchFood,
    searchFood,
  } = useContext(AppContext);

  return (
    <View style={styles.searchBar}>
      <Ionicons
        name="ios-search"
        size={25}
        style={{ marginTop: 4 }}
        color="#000"
      />
      <TextInput
        onChangeText={(text) => {
          handleSearchFood(text);
        }}
        placeholder="Enter your food item"
        placeholderTextColor="#999"
        value={searchFoodTerm}
        style={styles.inputSearch}
        //this runs whenever the user presses the 'return' key on the keyboard
        onSubmitEditing={() =>
          searchFoodTerm !== "" && searchFood(searchFoodTerm)
        }
      />
    </View>
  );
};

export default SearchBar;

//searchBar
//inputsearch
