import React from "react";
import { View, Text, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import {ProfileComponent} from "../components/Profile";
import {EditProfileComponent} from "../components/ProfileEdit";

const HomeScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Profile" component={ProfileComponent} />
      <Stack.Screen name="EditProfile" component={EditProfileComponent} />
    </Stack.Navigator>
  );
};

const MainScreen = ({props}) => {
  return (
      <View>
        <StatusBar style="auto" />
        <Text>Dashboard</Text>
        <View>
          <Text>Daily Average</Text>
        </View>
        <View>
          <Text>Calories</Text>
          <Text></Text>
        </View>
        <View>
          <Text>Carbohydrates</Text>
          <Text></Text>
        </View>
        <View>
          <Text>Protein</Text>
          <Text></Text>
        </View>
        <View>
          <Text>Fat</Text>
          <Text></Text>
        </View>
        <View>
          <Text>Insulin usage</Text>
        </View>
        <View>
          <Text>Edit profile</Text>
        </View>
      </View>
  );
};

export default HomeScreen;
