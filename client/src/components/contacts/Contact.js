import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

const Contact = () => {
  //access of everything in CpntactContext
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <div>
      {contacts.map((contact) => (
        //prop passed
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contact;
