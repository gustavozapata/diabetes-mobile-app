import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";
import InfoBar from "./InfoBar";

const InsulinCalendarSelected = ({ currentDate }) => {
  const {
    state: { calendarDates },
  } = useContext(AppContext);

  console.log(calendarDates.insulinInfo[currentDate]);

  return (
    <View style={innerStyles.container}>
      <View style={innerStyles.results}>
        <Text style={{ margin: -2, color: "orange" }}>
          {/* {calendarDates.insulinInfo[currentDate].meal.meal} */}
          Insulin
        </Text>
        {Object.entries(calendarDates.insulinInfo[currentDate]).map(
          ([key, value], i) => (
            // <InfoBar title={key} value={value} key={key} />
            // <Text key={i}>{value.insulin}</Text>
            <Text key={i}>Hi</Text>
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

export default InsulinCalendarSelected;
