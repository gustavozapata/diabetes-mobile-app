import React, { useReducer, useEffect } from "react";
import {
  TOGGLE_LOGIN_FORM,
  LOGIN,
  LOGOUT,
  SERVER_MSG,
  HANDLE_EMAIL,
  HANDLE_PASSWORD,
  ENTER_GUEST,
  HANDLE_SEARCH_FOOD,
  SEARCH_FOOD,
  LOADING,
  GET_DATA,
  SUCCESS_ENTER_MEAL,
  NEW_ENTER_MEAL,
  NO_FOOD_RESULTS,
  HANDLE_FOOD_ITEM,
  TOGGLE_FOOD_FORM,
} from "../helpers/types";
import axios from "axios";
import { host } from "../config/local";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { convertDateToCalendarDate } from "../utils/utils";

//Key used by AsyncStorage
const STORAGE_KEY = "app_storage";

//This initialises the Context API - we can then use it to create a Provider
const AppContext = React.createContext({});

//These are the reducers - they are the only ones that can modify the state of the application
//They define the business rules of our application
const diaryReducer = (state, action) => {
  switch (action.type) {
    case HANDLE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case HANDLE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case HANDLE_SEARCH_FOOD:
      return {
        ...state,
        searchFoodTerm: action.payload,
      };
    case HANDLE_FOOD_ITEM:
      return {
        ...state,
        foodItem: {
          ...state.foodItem,
          [action.payload.item]: action.payload.value,
        },
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
        showResults: true,
      };
    case SEARCH_FOOD:
      return {
        ...state,
        foodNutrients: {
          ...action.payload,
          //if not image is found, display the default meal image
          image: `${
            action.payload.image
              ? action.payload.image
              : "https://vybz.gustavozapata.me/food.png"
          }`,
        },
        isLoading: false,
        notFound: false,
      };
    case NO_FOOD_RESULTS:
      return {
        ...state,
        notFound: true,
        isLoading: false,
      };
    case TOGGLE_FOOD_FORM:
      return {
        ...state,
        showFoodForm: !state.showFoodForm,
      };
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        isLoginForm: action.payload,
        serverMsg: "",
      };
    case LOGIN:
      AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ _id: action.payload.data._id, isLogged: true })
      );
      return {
        ...state,
        isLogged: action.payload.isLogged,
        isGuest: false,
        meals: [...action.payload.data.meals],
        email: "",
        password: "",
        serverMsg: "",
      };
    case GET_DATA:
      return {
        ...state,
        meals: action.payload.meals,
        calendarDates: convertDateToCalendarDate(action.payload.meals),
      };
    case LOGOUT:
      AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ _id: "", isLogged: false })
      );
      return {
        ...state,
        isLogged: false,
        isGuest: false,
      };
    case ENTER_GUEST:
      return {
        ...state,
        isGuest: action.payload,
      };
    case SUCCESS_ENTER_MEAL:
      return {
        ...state,
        hasJustEnteredMeal: true,
        foodItem: {
          Name: action.payload.meal,
          Calories: action.payload.nutrients.calories,
          Carbs: action.payload.nutrients.carbs,
          Fat: action.payload.nutrients.fat,
          Protein: action.payload.nutrients.protein,
          Fibre: action.payload.nutrients.fibre,
        },
      };
    case NEW_ENTER_MEAL:
      return {
        ...state,
        hasJustEnteredMeal: false,
        searchFoodTerm: "",
        showResults: false,
        foodItem: {
          Name: "",
          Calories: "",
          Carbs: "",
          Fat: "",
          Protein: "",
          Fibre: "",
        },
      };
    case SERVER_MSG:
      return {
        ...state,
        serverMsg: action.payload,
      };
    default:
      return state;
  }
};

const getLogin = async () => {
  let storage = await AsyncStorage.getItem(STORAGE_KEY);
  storage = JSON.parse(storage);
  return storage.isLogged;
};

const getId = async () => {
  let storage = await AsyncStorage.getItem(STORAGE_KEY);
  storage = JSON.parse(storage);
  return storage._id;
};

//This is the initial state of the application
const initialState = {
  email: "",
  password: "",
  isLoginForm: true,
  isLogged: getLogin(),
  isGuest: false,
  serverMsg: "",
  searchFoodTerm: "",
  foodResults: [],
  foodNutrients: {
    image: "https://vybz.gustavozapata.me/food.png",
    nutrients: {
      ENERC_KCAL: 0,
      PROCNT: 0,
      FAT: 0,
      CHOCDF: 0,
      FIBTG: 0,
    },
  },
  isLoading: false,
  notFound: false,
  showResults: false,
  showFoodForm: false,
  hasJustEnteredMeal: false,
  meals: [],
  calendarDates: {},
  foodItem: {
    Name: "",
    Calories: "",
    Carbs: "",
    Fat: "",
    Protein: "",
    Fibre: "",
  },
};

//This Provider wraps the whole app and passes down all the state of the app and the 'actions'  or functions that call the reducers
export const AppProvider = ({ children }) => {
  //The Reducer is created and takes the reducers functions and the initial state
  const [state, dispatch] = useReducer(diaryReducer, initialState);

  useEffect(() => {
    const loadStorage = () => {
      if (getLogin()) {
        getData();
      }
    };
    loadStorage();
  }, [STORAGE_KEY]);

  const handleEmail = (value) => {
    dispatch({
      type: HANDLE_EMAIL,
      payload: value,
    });
  };

  const handlePassword = (value) => {
    dispatch({
      type: HANDLE_PASSWORD,
      payload: value,
    });
  };

  const handleFoodItem = (value, item) => {
    dispatch({
      type: HANDLE_FOOD_ITEM,
      payload: { item, value },
    });
  };

  const handleSearchFood = (value) => {
    dispatch({
      type: HANDLE_SEARCH_FOOD,
      payload: value,
    });
  };

  const toggleShowForm = () => {
    dispatch({
      type: TOGGLE_FOOD_FORM,
    });
  };

  const showEnterNewItem = () => {
    dispatch({
      type: NEW_ENTER_MEAL,
    });
  };

  const searchFood = (searchFoodTerm) => {
    dispatch({
      type: LOADING,
    });
    axios
      .get(
        `https://api.edamam.com/api/food-database/parser?app_id=07d50733&app_key=80fcb49b500737827a9a23f7049653b9&ingr=${searchFoodTerm}`
      )
      .then((res) => {
        if (res.data.parsed[0]) {
          dispatch({
            type: SEARCH_FOOD,
            payload: res.data.parsed[0].food,
          });
        } else {
          dispatch({
            type: NO_FOOD_RESULTS,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleLoginForm = (value) => {
    dispatch({
      type: TOGGLE_LOGIN_FORM,
      payload: value,
    });
  };

  const enterAsGuest = () => {
    dispatch({
      type: ENTER_GUEST,
      payload: true,
    });
  };

  const goBackToStart = () => {
    dispatch({
      type: ENTER_GUEST,
      payload: false,
    });
  };

  const login = (email, password) => {
    axios
      .post(`${host}/api/users/login`, { email, password })
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data,
          // payload: { isLogged: res.data.isLogged, _id: res.data.data._id, meals: res.data.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: SERVER_MSG,
          payload: "An error has occured",
        });
      });
  };

  const getData = async () => {
    let _id = await getId();
    axios.get(`${host}/api/meals/${_id}`).then((res) => {
      dispatch({
        type: GET_DATA,
        payload: { meals: res.data.data },
      });
    });
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  const signup = (email, password) => {
    axios
      .post(`${host}/api/users/signup`, { email, password })
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SERVER_MSG,
          payload: "An error has occured",
        });
      });
  };

  const enterMeal = async (meal) => {
    let storage = getStorage();
    axios
      .post(`${host}/api/meals/${storage._id}`, { meal })
      .then(() => {
        dispatch({
          type: SUCCESS_ENTER_MEAL,
          payload: meal,
        });
      })
      .catch((err) => {
        dispatch({
          type: SERVER_MSG,
          payload: "An error has occured",
        });
      });
  };

  //The state and the actions are passed to the highest level component App.js
  return (
    <AppContext.Provider
      value={{
        state,
        handleEmail,
        handlePassword,
        handleSearchFood,
        handleFoodItem,
        searchFood,
        toggleLoginForm,
        toggleShowForm,
        showEnterNewItem,
        login,
        signup,
        logout,
        enterAsGuest,
        goBackToStart,
        enterMeal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
