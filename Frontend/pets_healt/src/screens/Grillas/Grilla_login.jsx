import React from "react";
import "./Grilla_login.css";
import Navbar_login from "../Login/Navbar_login.jsx";
import Login from "../Login/Login.jsx"


export default function Grilla_login() {
  return (
    <div className="principal" id="principal">
      <div className="navbar_login" id="navbar_login">
        <Navbar_login />
      </div>
      <div className="login" id="login">
        <Login/>
      </div>
    </div>
  );
}