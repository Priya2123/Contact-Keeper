import React, { Fragment, useContext, useEffect } from "react";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/ContactContext";
import Spinner from "../layout/spinner";

const Contact = () => {
  //access of everything in CpntactContext
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;
  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);
  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={1000}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                //prop passed
                <CSSTransition
                  key={contact._id}
                  timeout={1000}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contact;
