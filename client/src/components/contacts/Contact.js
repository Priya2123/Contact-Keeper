import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";

const Contact = () => {
  //access of everything in CpntactContext
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <div>
      {contacts.map((contact) => (
        <h1>{contact.name}</h1>
      ))}
    </div>
  );
};

export default Contact;
