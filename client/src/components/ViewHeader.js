import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

const ViewHeader = ({ title, description }) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={[styles.title, { marginBottom: 5 }]}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default ViewHeader;
