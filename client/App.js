import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Nav from "./Nav";
import { AppProvider } from "./src/context/AppContext";
import StartScreen from "./src/screens/StartScreen";

const App = () => {
  const Stack = createStackNavigator();

  // This structure allows the app to have some views under the navigation bar and others outside the navigation
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Nav} />
          <Stack.Screen name="Start" component={StartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
