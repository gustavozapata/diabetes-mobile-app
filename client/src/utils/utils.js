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
  if (date.nutrients[nutrient] && mealRecorded.meal.nutrients[nutrient]) {
    return (
      parseFloat(date.nutrients[nutrient].split(" ")[0]) +
      parseFloat(mealRecorded.meal.nutrients[nutrient].split(" ")[0])
    ).toFixed(2);
  }
  return mealRecorded.meal.nutrients[nutrient]
    ? mealRecorded.meal.nutrients[nutrient].split(" ")[0]
    : "0";
};

exports.convertDateToCalendarDate = (entries) => {
  const dates = entries.meals;
  let calendarDates = {};
  let markedDates = {};
  let mealInfo = {};

  if (dates.length > 0) {
    const meal = { key: "meal", color: "#05666C" };
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
        },
      };
    });
  }
  calendarDates.markedDates = markedDates;
  calendarDates.mealInfo = mealInfo;
  let result = constructInsulinDates(entries.insulin, markedDates);
  calendarDates.markedDates = result.mealDates;
  calendarDates.insulinInfo = result.insulinInfo;
  return calendarDates;
};

const constructInsulinDates = (insulin, mealDates) => {
  let insulinInfo = {};
  if (insulin.length > 0) {
    const insulinDot = { key: "insulin", color: "orange" };
    const meal = { key: "meal", color: "#05666C" };
    insulin.map((date) => {
      let shortDate = date.date.split("T")[0];
      //insulin {22, 24, 24}   //mealDates {18, 19, 22}
      if (mealDates.hasOwnProperty(shortDate)) {
        mealDates = {
          ...mealDates,
          [shortDate]: {
            dots: [insulinDot, meal],
          },
        };
      } else {
        mealDates = {
          ...mealDates,
          [shortDate]: {
            dots: [insulinDot],
          },
        };
      }

      if (insulinInfo.hasOwnProperty(shortDate)) {
        insulinInfo = {
          ...insulinInfo,
          [shortDate]: {
            insulin: [...insulinInfo[shortDate].insulin, date],
          },
        };
      } else {
        insulinInfo = {
          ...insulinInfo,
          [shortDate]: {
            insulin: [date],
          },
        };
      }
    });
  }
  return { mealDates, insulinInfo };
};
