import React from "react";
import { View, Text, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="EnterInsulin" component={EnterInsulinScreen} />
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
      </View>
  );
};

const EnterInsulinScreen = ({props}) => {
  return (
      <View>
        <StatusBar style="auto" />
        <Text>Enter Insulin</Text>
        <View>
          <Text>Time</Text>
          <TextInput />
        </View>
        <View>
          <Text>Insulin Type</Text>
          <TextInput />
        </View>
        <View>
          <Text>Dosage (Amount)</Text>
          <TextInput />
        </View>
      </View>
  );
};

export default HomeScreen;
