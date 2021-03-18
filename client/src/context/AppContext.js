import React, { useReducer } from "react";
import {
  TOGGLE_LOGIN_FORM,
  LOGIN,
  SERVER_MSG,
  HANDLE_EMAIL,
  HANDLE_PASSWORD,
  ENTER_GUEST,
  HANDLE_SEARCH_FOOD,
  SEARCH_FOOD,
  LOADING,
  ENTER_MEAL,
  NO_FOOD_RESULTS,
  HANDLE_FOOD_ITEM,
  TOGGLE_FOOD_FORM,
} from "../helpers/types";
import axios from "axios";
import { host } from "../config/local";
// import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      console.log(action.payload);
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
        JSON.stringify({ _id: action.payload._id })
      );
      return {
        ...state,
        isLogged: action.payload.isLogged,
        isGuest: false,
        serverMsg: "",
      };
    case ENTER_GUEST:
      return {
        ...state,
        isGuest: true,
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

//This is the initial state of the application
const initialState = {
  email: "",
  password: "",
  isLoginForm: true,
  isLogged: false,
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

  const searchFood = (searchFoodTerm) => {
    dispatch({
      type: LOADING,
    });
    axios
      .get(
        `https://api.edamam.com/api/food-database/parser?app_id=07d50733&app_key=80fcb49b500737827a9a23f7049653b9&ingr=${searchFoodTerm}`
      )
      .then((res) => {
        console.log(res.data.parsed);
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
    });
  };

  const login = (email, password) => {
    axios
      .post(`${host}/api/users/login`, { email, password })
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: { isLogged: res.data.isLogged, _id: res.data.data._id },
        });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({
          type: SERVER_MSG,
          payload: "An error has occured",
        });
      });
  };

  const signup = (email, password) => {
    axios
      .post(`${host}/api/users/signup`, { email, password })
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data.data.isLogged,
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
    let storage = await AsyncStorage.getItem(STORAGE_KEY);
    storage = JSON.parse(storage);

    axios
      .post(`${host}/api/meals/${storage._id}`, { meal })
      .then((res) => {
        dispatch({
          type: ENTER_MEAL,
          payload: "success",
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
        login,
        signup,
        enterAsGuest,
        enterMeal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
