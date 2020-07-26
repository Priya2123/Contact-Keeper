import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    //gets stored in local storage
    token: localStorage.getItem("token"),
    //logged in or not
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };
  //dispatch: to dispatch objects to the reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //ACTIONS
  //Load User

  //Register User

  //Login User

  //Logout

  //Clear Errors

  return (
    //for global access
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
