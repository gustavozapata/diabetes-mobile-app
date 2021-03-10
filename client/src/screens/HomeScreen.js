import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileComponent from "../components/ProfileComponent";
import ProfileEditComponent from "../components/ProfileEditComponent";
import ExportComponent from "../components/ExportComponent";
import styles from "../styles";

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

const MainScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar style="auto" />
      <Text style={styles.title}>Dashboard</Text>
      <View>
        <Text style={styles.label}>Daily Average</Text>
      </View>
      <View>
        <Text style={styles.label}>Calories</Text>
        <Text></Text>
      </View>
      <View>
        <Text style={styles.label}>Carbohydrates</Text>
        <Text></Text>
      </View>
      <View>
        <Text style={styles.label}>Protein</Text>
        <Text></Text>
      </View>
      <View>
        <Text style={styles.label}>Fat</Text>
        <Text></Text>
      </View>
      <View>
        <Text style={styles.label}>Insulin usage</Text>
      </View>
      <Button style={styles.button} title="Profile" onPress={() => {navigation.navigate("Profile")}} />
      <Button style={styles.button} title="Save Export" onPress={() => {navigation.navigate("Export")}}/>
    </View>
  );
};

export default HomeScreen;
