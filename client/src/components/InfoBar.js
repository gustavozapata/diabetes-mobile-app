import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InfoBar = ({ title, value }) => {
  return (
    <View style={{ width: 190 }}>
      <View style={innerStyles.header}>
        <Text style={innerStyles.label}>{title}</Text>
        <Text style={innerStyles.measure}>{value}</Text>
      </View>
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
  bar: {
    width: 220,
    height: 12,
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
  },
});

export default InfoBar;
