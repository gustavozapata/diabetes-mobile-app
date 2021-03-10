import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { ProfileComponent } from "../components/ProfileComponent";
import { EditProfileComponent } from "../components/ProfileEditComponent";

const HomeScreen = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Profile" component={ProfileComponent} />
        <Stack.Screen name="EditProfile" component={EditProfileComponent} />
        <Stack.Screen name="Export" component={ExportComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainScreen = ({ props }) => {
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
