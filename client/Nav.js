import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen";
import EnterMealScreen from "./src/screens/EnterMealScreen";
import InsulinScreen from "./src/screens/InsulinScreen";
import StartScreen from "./src/screens/StartScreen";
import AppContext from "./src/context/AppContext";

const Nav = () => {
  const {
    state: { isGuest },
  } = useContext(AppContext);
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
          } else if (route.name === "Insulin") {
            icon = focused ? "medkit" : "medkit-outline";
          } else {
            icon = focused ? "person-add" : "person-add-outline";
          }
          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#05666C",
        inactiveTintColor: "gray",
      }}
    >
      {!isGuest && <Tab.Screen name="Dashboard" component={HomeScreen} />}
      <Tab.Screen name="Meal" component={EnterMealScreen} />
      {!isGuest ? (
        <Tab.Screen name="Insulin" component={InsulinScreen} />
      ) : (
        <Tab.Screen name="Access">
          {(props) => <StartScreen {...props} access={true} />}
        </Tab.Screen>
      )}
    </Tab.Navigator>
  );
};

export default Nav;
