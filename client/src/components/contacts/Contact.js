import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/ContactContext";

const Contact = () => {
  //access of everything in CpntactContext
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={1000} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              //prop passed
              <CSSTransition key={contact.id} timeout={1000} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contact;
