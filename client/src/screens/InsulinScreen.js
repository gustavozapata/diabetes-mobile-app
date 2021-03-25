import React, { useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, FlatList } from "react-native";
import InsulinEnterComponent from "../components/InsulinEnter";
import InsulinDeleteComponent from "../components/InsulinDelete";
import styles from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppContext from "../context/AppContext";

const Stack = createStackNavigator();

const InsulinScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Insulin Menu">
      <Stack.Screen name="Insulin Menu" component={InsulinMainComponent} />
      <Stack.Screen
        name="Insulin Enter"
        component={InsulinEnterComponent}
        options={{ headerTintColor: "#05666C" }}
      />
      <Stack.Screen name="InsulinDelete" component={InsulinDeleteComponent} />
    </Stack.Navigator>
  );
};

const InsulinMainComponent = ({ navigation }) => {
  const {
    state: { insulin },
    getInsulin,
    enterInsulin,
  } = useContext(AppContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getInsulin();
    });
    return unsubscribe;
  }, [navigation]);

  const insulinItems = ({ item }) => (
    <View style={styles.insulinItem}>
      <Text>
        {new Date(item.date).toLocaleString()} - {item.insulin} - {item.dosage}{" "}
        mg/dl
      </Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Insulin screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Insulin Enter", { enterInsulin: enterInsulin });
        }}
      >
        <Text style={styles.buttonLabel}>Add new Insulin item</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "500",
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        Insulin History
      </Text>
      <FlatList
        data={insulin}
        renderItem={insulinItems}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default InsulinScreen;
