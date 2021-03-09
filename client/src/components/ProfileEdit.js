import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/AppContext";

const ProfileEditComponent = () => {
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

export default ProfileEditComponent;