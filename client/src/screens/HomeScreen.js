import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileComponent from "../components/ProfileComponent";
import ProfileEditComponent from "../components/ProfileEditComponent";
import ExportComponent from "../components/ExportComponent";

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Profile" component={ProfileComponent} />
        <Stack.Screen name="EditProfile" component={ProfileEditComponent} />
        <Stack.Screen name="Export" component={ExportComponent} />
      </Stack.Navigator>
  );
};

const MainScreen = () => {
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
      <Button title="Profile" />
      <Button title="Save Export" />
    </View>
  );
};

export default HomeScreen;
