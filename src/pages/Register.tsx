import React from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import "../styles/pages/register.css";

const Register = () => {
  return (
    <div id="Register-content">
      <Sidebar />
      <div className="register-content">
        <Header
          title="BigBoom Company BigBoom Company BigBoom Company"
          user="Felipe Moreira"
        />
      </div>
    </div>
  );
};

export default Register;
