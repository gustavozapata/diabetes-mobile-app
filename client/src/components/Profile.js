import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";

import styles from "../styles";

const ProfileComponent = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  useEffect(() => {
    if (route.params?._email) {
      setEmail(params._email);
      setPassword(params._password);
      setFirstName(params._firstName);
      setLastName(params._lastName);
      setHeight(params._height);
      setWeight(params._weight);
      //do HTTP stuff if contents has changed
    }
  }, [route.params]);

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Profile</Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <Text>{email}</Text>
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <Text>{password}</Text>
      </View>
      <View>
        <Text style={styles.label}>First name</Text>
        <Text>{firstName}</Text>
      </View>
      <View>
        <Text style={styles.label}>Last name</Text>
        <Text>{lastName}</Text>
      </View>
      <View>
        <Text style={styles.label}>Weight</Text>
        <Text>{weight}</Text>
      </View>
      <View>
        <Text style={styles.label}>Height</Text>
        <Text>{height}</Text>
      </View>
      <Button
        title="Edit profile"
        onPress={() => {
          navigation.navigate("ProfileEdit", {
            params: {
              _email: email,
              _password: password,
              _firstName: firstName,
              _lastName: lastName,
              _weight: weight,
              _height: height,
            },
          });
        }}
      />
    </View>
  );
};

export default ProfileComponent;
