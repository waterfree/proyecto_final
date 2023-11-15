import React from "react";
import "./Grilla_home.css";
import Home from "../Home/Home.jsx"
import Navbar from "../Home/Navbar.jsx";


export default function Grilla_home() {
  return (
    <div className="principal" id="principal">
      <div className="navbar" id="navbar">
        <Navbar />
      </div>
      <div className="Home" id="Home">
        <Home/>
      </div>
    </div>
  );
}
