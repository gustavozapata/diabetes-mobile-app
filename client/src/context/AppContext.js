import React, { useReducer } from "react";
import { TOGGLE_LOGIN_FORM } from "../helpers/types";

//This initialises the Context API - we can then use it to create a Provider
const AppContext = React.createContext({});

//These are the reducers - they are the only ones that can modify the state of the application
//They define the business rules of our application
const diaryReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        isLoginForm: action.payload,
      };
    default:
      return state;
  }
};

//This is the initial state of the application
const initialState = {
  isLoginForm: true,
};

//This Provider wraps the whole app and passes down all the state of the app and the 'actions'  or functions that call the reducers
export const DiaryProvider = ({ children }) => {
  //The Reducer is created and takes the reducers functions and the initial state
  const [state, dispatch] = useReducer(diaryReducer, initialState);

  const toggleLoginForm = (value) => {
    dispatch({
      type: TOGGLE_LOGIN_FORM,
      payload: value,
    });
  };

  //The state and the actions are passed to the highest level component App.js
  return (
    <AppContext.Provider
      value={{
        state: state,
        toggleLoginForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
