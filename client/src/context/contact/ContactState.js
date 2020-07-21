import React, { useReducer } from "react";
import uuid from "react-uuid";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";
import ContactContext from "./ContactContext";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Priya Aggarwal",
        email: "aggarwalpriya1121@gmail.com",
        phone: "1111111111",
        type: "personal",
      },
      {
        id: 2,
        name: "Molly Pie",
        email: "mollypie@gmail.com",
        phone: "2222222222",
        type: "personal",
      },
      {
        id: 3,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "3333333333",
        type: "professional",
      },
    ],
  };
  //dispatch: to dispatch objects to the reducer
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //ACTIONS
  //Add Contact
  const addContact = (contact) => {
    //to generate random id
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    //for global access
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
