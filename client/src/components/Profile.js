import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AppContext from "../context/AppContext";

const ProfileComponent = ({navigation, route}) => {
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
}

export default ProfileComponent;