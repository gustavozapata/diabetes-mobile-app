import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ViewHeader from "../components/ViewHeader";
import AppContext from "../context/AppContext";
import styles from "../styles";

const ProfileFragment = ({ logoff }) => {
  const {
    state: { profileEmail },
  } = useContext(AppContext);

  return (
    <View style={{ width: "100%" }}>
      <ViewHeader title="Profile" description="Your profile" />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.label}>Email</Text>
        <Text style={innerStyles.email}>{profileEmail}</Text>
      </View>
      <Text style={innerStyles.logoff} onPress={logoff}>
        Log out
      </Text>
    </View>
  );
};

const innerStyles = StyleSheet.create({
  logoff: {
    marginVertical: 40,
    fontSize: 17,
    fontWeight: "500",
    color: "#888",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  email: {
    fontSize: 18,
    marginTop: 4,
  },
});

export default ProfileFragment;
