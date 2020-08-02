import React, { useContext, useEffect } from "react";
import Contact from "../contacts/Contact";
import ContactForm from "../contacts/ContactForm";
import FilterContacts from "../contacts/FilterContacts";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <FilterContacts />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
