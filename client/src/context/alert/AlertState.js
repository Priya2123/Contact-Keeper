import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = [];
  //dispatch: to dispatch objects to the reducer
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //ACTIONS
  //Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    //for global access
    <alertContext.Provider value={{ alerts: state, setAlert }}>
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;