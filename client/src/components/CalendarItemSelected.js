import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";
import InfoBar from "./InfoBar";

const CalendarItemSelected = ({ currentDate }) => {
  const {
    state: { calendarDates },
  } = useContext(AppContext);

  return (
    <View style={innerStyles.container}>
      <View style={innerStyles.results}>
        <Text style={{ margin: -6, color: "#05666C" }}>
          {calendarDates.mealInfo[currentDate].meal.meal}
        </Text>
        {Object.entries(calendarDates.mealInfo[currentDate].meal.nutrients).map(
          ([key, value]) => (
            <InfoBar title={key} value={value} key={key} />
          )
        )}
      </View>
    </View>
  );
};

const innerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 5,
  },
  results: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
});

export default CalendarItemSelected;
