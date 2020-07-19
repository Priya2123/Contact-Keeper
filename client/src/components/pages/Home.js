import React from "react";
import Contact from "../contacts/Contact";

const Home = () => {
  return (
    <div className="grid-2">
      <div>{/* Contact Form */}</div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
