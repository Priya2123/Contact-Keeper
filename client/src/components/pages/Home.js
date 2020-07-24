import React from "react";
import Contact from "../contacts/Contact";
import ContactForm from "../contacts/ContactForm";
import FilterContacts from "../contacts/FilterContacts";

const Home = () => {
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
