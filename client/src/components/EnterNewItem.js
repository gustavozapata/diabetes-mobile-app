import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";
import InfoBar from "./InfoBar";

const EnterNewItem = () => {
  const {
    state: { foodItem },
    showEnterNewItem,
  } = useContext(AppContext);

  return (
    <View style={innerStyles.container}>
      <Text style={innerStyles.added}>✅ Item added successfully</Text>
      <View style={{ borderWidth: 1, borderColor: "#000", padding: 10 }}>
        {Object.keys(foodItem).map((item, i) => (
          <InfoBar title={item} value={foodItem[item]} key={i} />
        ))}
      </View>
      <Text style={innerStyles.newItem} onPress={() => showEnterNewItem()}>
        Enter new item
      </Text>
    </View>
  );
};

const innerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  added: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    marginVertical: 25,
  },
  newItem: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    marginVertical: 30,
    color: "#05666C",
    textDecorationLine: "underline",
  },
});

export default EnterNewItem;
