exports.convertDateToCalendarDate = (dates) => {
  let calendarDates = {};
  if (dates.length > 0) {
    const meal = { key: "meal", color: "#05666C" };
    // const insulin = { key: "insulin", color: "orange" };
    dates.map((date, id) => {
      let shortDate = date.date.split("T")[0];
      calendarDates = {
        ...calendarDates,
        [shortDate]: {
          id,
          dots: [meal],
          //   selected: ["currentDate"] === shortDate ? true : false,
        },
      };
    });
  }
  console.log(calendarDates);
  return calendarDates;
};
