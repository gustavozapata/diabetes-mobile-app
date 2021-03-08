import React, { useReducer } from "react";
import {
  TOGGLE_LOGIN_FORM,
  LOGIN,
  SERVER_MSG,
  HANDLE_EMAIL,
  HANDLE_PASSWORD,
  ENTER_GUEST,
} from "../helpers/types";
import axios from "axios";
import { host } from "../config/local";

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
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        isLoginForm: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        isLogged: action.payload,
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
          payload: res.data.isLogged,
        });
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

  //The state and the actions are passed to the highest level component App.js
  return (
    <AppContext.Provider
      value={{
        state,
        handleEmail,
        handlePassword,
        toggleLoginForm,
        login,
        signup,
        enterAsGuest,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
