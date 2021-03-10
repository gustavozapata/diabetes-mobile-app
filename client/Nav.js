import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen";
import EnterMealScreen from "./src/screens/EnterMealScreen";
import InsulinScreen from "./src/screens/InsulinScreen";

const Nav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === "Dashboard") {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === "Meal") {
            icon = focused ? "fast-food" : "fast-food-outline";
          } else {
            icon = focused ? "medkit" : "medkit-outline";
          }

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#05666C",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Dashboard" component={HomeScreen} />
      <Tab.Screen name="Meal" component={EnterMealScreen} />
      <Tab.Screen name="Insulin" component={InsulinScreen} />
    </Tab.Navigator>
  );
};

export default Nav;
