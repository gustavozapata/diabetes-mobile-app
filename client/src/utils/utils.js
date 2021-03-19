exports.convertDateToCalendarDate = (dates) => {
  let calendarDates = {};
  let markedDates = {};
  let mealInfo = {};

  if (dates.length > 0) {
    const meal = { key: "meal", color: "#05666C" };
    // const insulin = { key: "insulin", color: "orange" };
    dates.map((date, id) => {
      let shortDate = date.date.split("T")[0];

      mealInfo = {
        ...mealInfo,
        [shortDate]: {
          meal: date,
        },
      };

      markedDates = {
        ...markedDates,
        [shortDate]: {
          id,
          dots: [meal],
          //   selected: ["currentDate"] === shortDate ? true : false,
        },
      };
    });
  }
  calendarDates.markedDates = markedDates;
  calendarDates.mealInfo = mealInfo;
  console.log(calendarDates);
  return calendarDates;
};
