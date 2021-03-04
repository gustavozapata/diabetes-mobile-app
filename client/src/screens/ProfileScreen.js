import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, TextInput } from "react-native";

const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={MainScreen} />
      <Stack.Screen name="ProfileEdit" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

const MainScreen = ({ navigation, route }) => {
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
    <View>
      <Text>Profile</Text>
      <View>
        <Text>Email</Text>
        <Text>{email}</Text>
      </View>
      <View>
        <Text>Password</Text>
        <Text>{password}</Text>
      </View>
      <View>
        <Text>First name</Text>
        <Text>{firstName}</Text>
      </View>
      <View>
        <Text>Last name</Text>
        <Text>{lastName}</Text>
      </View>
      <View>
        <Text>Weight</Text>
        <Text>{weight}</Text>
      </View>
      <View>
        <Text>Height</Text>
        <Text>{height}</Text>
      </View>
      <Button title="Edit profile" onPress={() => {
        navigation.navigate("ProfileEdit", {
          params: {
            _email: email,
            _password: password,
            _firstName: firstName,
            _lastName: lastName,
            _weight: weight,
            _height: height
          }
        });
      }} />
    </View>
  );
};

const EditProfileScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState(route.params._email);
  const [password, setPassword] = useState(route.params._password);
  const [firstName, setFirstName] = useState(route.params._firstName);
  const [lastName, setLastName] = useState(route.params._lastName);
  const [weight, setWeight] = useState(route.params._weight);
  const [height, setHeight] = useState(route.params._height);
  return (
    <View>
      <Text>Profile</Text>
      <View>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={(val) => { setEmail(val); }} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput value={password} onChangeText={(val) => { setPassword(val); }} />
      </View>
      <View>
        <Text>First name</Text>
        <TextInput value={firstName} onChangeText={(val) => { setFirstName(val); }} />
      </View>
      <View>
        <Text>Last name</Text>
        <TextInput value={lastName} onChangeText={(val) => { setLastName(val); }} />
      </View>
      <View>
        <Text>Weight</Text>
        <TextInput value={weight} onChangeText={(val) => { setWeight(val); }} />
      </View>
      <View>
        <Text>Height</Text>
        <TextInput value={height} onChangeText={(val) => { setHeight(val); }} />
      </View>
      <Button title="Cancel editing" onPress={() => {
        navigation.navigate("Profile");
      }} />
      <Button title="Complete editing" onPress={() => {
        navigation.navigate("Profile", {
          params: {
            _email: email,
            _password: password,
            _firstName: firstName,
            _lastName: lastName,
            _weight: weight,
            _height: height
          }
        });
      }} />
    </View>
  );
}

export default ProfileScreen;
