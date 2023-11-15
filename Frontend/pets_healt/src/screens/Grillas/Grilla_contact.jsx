import React from "react";
import "./Grilla_contact.css";
import Navbar from "../Contactenos/Navbar_contact.jsx";
import Contact from "../Contactenos/Contact.jsx";


export default function Grilla_contact() {
  return (
    <div className="principal" id="principal">
      <div className="navbar" id="navbar">
        <Navbar />
      </div>
      <div className="contact" id="contact">
        <Contact/>
      </div>
    </div>
  );
}