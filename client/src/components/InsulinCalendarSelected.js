import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";
import InfoBar from "./InfoBar";

const InsulinCalendarSelected = ({ currentDate }) => {
  const {
    state: { calendarDates },
  } = useContext(AppContext);

  //   console.log(calendarDates.insulinInfo[currentDate]);

  return (
    <View style={innerStyles.container}>
      <View style={innerStyles.results}>
        <Text style={{ margin: -2, color: "orange" }}>Insulin</Text>
        {calendarDates.insulinInfo[currentDate] &&
          calendarDates.insulinInfo[currentDate].insulin.map((insul) => (
            <InfoBar
              title={insul.insulin}
              value={insul.dosage}
              key={insul._id}
            />
          ))}
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
