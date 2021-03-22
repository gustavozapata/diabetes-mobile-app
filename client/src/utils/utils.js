const addValuesFromSameDate = (date, mealRecorded) => {
  date.meal = "Total nutrients of the day";
  date.nutrients = {
    calories: addNutrients(date, mealRecorded, "calories") + " kcal",
    carbs: addNutrients(date, mealRecorded, "carbs") + " gram",
    fat: addNutrients(date, mealRecorded, "fat") + " gram",
    fibre: addNutrients(date, mealRecorded, "fibre") + " gram",
    protein: addNutrients(date, mealRecorded, "protein") + " gram",
  };
  return date;
};

//add nutrients from all meals taken on the same day
const addNutrients = (date, mealRecorded, nutrient) => {
  if (date.nutrients[nutrient]) {
    return (
      parseFloat(date.nutrients[nutrient].split(" ")[0]) +
      parseFloat(mealRecorded.meal.nutrients[nutrient].split(" ")[0])
    ).toFixed(2);
  }
  return mealRecorded.meal.nutrients[nutrient]
    ? mealRecorded.meal.nutrients[nutrient].split(" ")[0]
    : "-";
};

exports.convertDateToCalendarDate = (dates) => {
  let calendarDates = {};
  let markedDates = {};
  let mealInfo = {};

  if (dates.length > 0) {
    const meal = { key: "meal", color: "#05666C" };
    // const insulin = { key: "insulin", color: "orange" };
    dates.map((date, id) => {
      let shortDate = date.date.split("T")[0];

      if (mealInfo.hasOwnProperty(shortDate)) {
        let mealRecorded = mealInfo[shortDate];
        mealInfo = {
          ...mealInfo,
          [shortDate]: {
            meal: addValuesFromSameDate(date, mealRecorded),
          },
        };
      } else {
        mealInfo = {
          ...mealInfo,
          [shortDate]: {
            meal: date,
          },
        };
      }

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
  // console.log(mealInfo);
  return calendarDates;
};
