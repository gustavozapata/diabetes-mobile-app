import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../styles";

const InfoBar = ({ title, value, measure }) => {
  const [amount, setAmount] = useState(value);

  useEffect(() => {
    let modifiedAmount =
      Math.floor(amount * 10) > 220 ? 220 : Math.floor(amount * 10);
    setAmount(modifiedAmount);
  }, []);

  const stateStyles = StyleSheet.create({
    innerBar: {
      width: amount,
      height: 12,
      borderRadius: 10,
    },
  });
  return (
    <View style={{ width: 190 }}>
      <View style={innerStyles.header}>
        <Text style={innerStyles.label}>{title}</Text>
        <Text style={innerStyles.measure}>
          {value} {measure}
        </Text>
      </View>
      {/* TODO: QUANTITY BARS */}
      {/* <View style={innerStyles.bar}>
        <View style={[stateStyles.innerBar, innerStyles[title]]}></View>
      </View> */}
    </View>
  );
};

const innerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  measure: {
    color: "#555",
    fontSize: 13,
    paddingTop: 8,
    fontWeight: "500",
  },
  label: {
    color: "#05666C",
    fontSize: 14,
    paddingTop: 8,
    fontWeight: "600",
  },
  Energy: {
    backgroundColor: "#044E51",
  },
  Protein: {
    backgroundColor: "#06737A",
  },
  Fat: {
    backgroundColor: "#078188",
  },
  Carbs: {
    backgroundColor: "#0A9BA3",
  },
  Fibre: {
    backgroundColor: "#0CB6BF",
  },
  bar: {
    width: 220,
    height: 12,
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
  },
});

export default InfoBar;
