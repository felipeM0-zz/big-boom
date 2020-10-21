import React, { useState } from "react";
import { Button } from "@material-ui/core";
import LogoImg from "../images/logo.png";
import * as EmailValidator from "email-validator";

import "../styles/pages/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div id="Login-content">
      <div className="first-box">
        <img src={LogoImg} alt="Logo" />
        <p>Entrar no BigBoom</p>
        <input
          required
          type="email"
          name="Email"
          value={email}
          placeholder="Endereço de email"
          onChange={(e) => setEmail(e.target.value)}
          className={`${
            email.length > 0 ? (EmailValidator.validate(email) ? "" : "error") : ""
          }`}
        />
        <Button disabled={!EmailValidator.validate(email)} variant="contained">
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Login;
