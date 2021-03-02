import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen";
import EnterMealScreen from "./src/screens/EnterMealScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// COMPONENT UNDER DEVELOPMENT

const Nav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === "Home") {
              icon = focused ? "home" : "home-outline";
            } else if (route.name === "Meal") {
              icon = focused ? "fast-food" : "fast-food-outline";
            } else {
              icon = focused ? "person" : "person-outline";
            }

            return <Ionicons name={icon} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#05666C",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Meal" component={EnterMealScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
