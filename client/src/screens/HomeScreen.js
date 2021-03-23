import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Button,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import ProfileComponent from "../components/Profile";
import ProfileEditComponent from "../components/ProfileEdit";
import ExportComponent from "../components/Export";
import styles from "../styles";
import AppContext from "../context/AppContext";
import ViewHeader from "../components/ViewHeader";
import ProfileFragment from "./ProfileFragment";
import CalendarItemSelected from "../components/CalendarItemSelected";

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

const MainScreen = ({ navigation }) => {
  const [currentDate, setCurentDate] = useState("");
  const {
    state: { calendarDates },
    logout,
    getData,
  } = useContext(AppContext);

  // https://reactnavigation.org/docs/function-after-focusing-screen/
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  const logoff = () => {
    logout();
    navigation.navigate("Start");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ViewHeader
          title="Dashboard"
          description="View your activity and manage your profile"
        />
        <View style={{ width: "100%", marginTop: 12, marginBottom: 80 }}>
          <Calendar
            onDayPress={(day) => {
              setCurentDate(day.dateString);
            }}
            // markedDates={{
            //   "2021-03-13": {
            //     dots: [meal, insulin],
            //     selected: currentDate === "2021-03-13" ? true : false,
            //   },
            //   "2021-03-14": {
            //     dots: [meal],
            //     selected: currentDate === "2021-03-14" ? true : false,
            //   },
            //   "2021-03-15": {
            //     dots: [insulin],
            //     selected: currentDate === "2021-03-15" ? true : false,
            //   },
            //   "2021-03-16": {
            //     dots: [insulin],
            //     selected: currentDate === "2021-03-16" ? true : false,
            //   },
            //   "2021-03-17": {
            //     dots: [meal, insulin],
            //     selected: currentDate === "2021-03-17" ? true : false,
            //     // selectedColor: "#05666C",
            //   },
            //   "2021-03-19": {
            //     marked: true,
            //     selected: currentDate === "2021-03-19" ? true : false,
            //     dots: [meal],
            //   },
            // }}
            markedDates={calendarDates.markedDates}
            markingType={"multi-dot"}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
              marginTop: 5,
            }}
          >
            <View style={innerStyles.mealCircle}></View>
            <Text>Meal</Text>
            <View style={innerStyles.insulinCircle}></View>
            <Text>Insulin</Text>
          </View>

          {calendarDates.mealInfo && calendarDates.mealInfo[currentDate] ? (
            <CalendarItemSelected currentDate={currentDate} />
          ) : (
            currentDate !== "" && (
              <Text style={{ textAlign: "center", marginTop: 50 }}>
                No data recorded
              </Text>
            )
          )}
        </View>
        <ProfileFragment logoff={logoff} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const innerStyles = StyleSheet.create({
  mealCircle: {
    width: 10,
    height: 10,
    backgroundColor: "#05666C",
    borderRadius: 50,
    marginRight: 5,
  },
  insulinCircle: {
    width: 10,
    height: 10,
    backgroundColor: "orange",
    borderRadius: 50,
    marginRight: 5,
    marginLeft: 20,
  },
});

export default HomeScreen;
