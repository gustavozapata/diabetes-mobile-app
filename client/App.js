import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Nav from "./Nav";
import StartScreen from "./src/screens/StartScreen";
import { DiaryProvider } from "./src/context/AppContext";

const App = () => {
  const Stack = createStackNavigator();

  // This structure allows the app to have some views under the navigation bar and others outside the navigation
  return (
    <DiaryProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Nav} />
          <Stack.Screen name="Start" component={StartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DiaryProvider>
  );
};

export default App;
