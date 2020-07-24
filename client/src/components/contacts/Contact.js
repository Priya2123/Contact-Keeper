import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/ContactContext";

const Contact = () => {
  //access of everything in CpntactContext
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <div>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            //prop passed
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </div>
  );
};

export default Contact;
