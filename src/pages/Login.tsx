import React, { FormEvent, useState } from "react";
import * as EmailValidator from "email-validator";
import { Button, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

import LogoImg from "../images/logo.png";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import "../styles/pages/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showInputPass, setShowInputPass] = useState(false);

  const handleEmail = (e: FormEvent) => {
    e.preventDefault();
    EmailValidator.validate(email) && setShowPass(true);
  };

  const returnLink = () => {
    setShowPass(false);
    setTimeout(() => {
      setEmail("");
      setPassword("");
    }, 250);
  };

  const activePass = () => {
    setShowInputPass(!showInputPass);
  };

  return (
    <div id="Login-content">
      <div className="bg-move-gradient" />
      <div>
        <form onSubmit={handleEmail} id="first-box" className="first-box">
          <img src={LogoImg} alt="Logo" />

          <div className={`msg-top ${showPass ? "is-flipped" : ""}`}>
            <div className="dv-msg-top-inside">
              <p>Entrar no BigBoom</p>
            </div>
            <div className="dv-msg-top-inside dv-msg-top-back">
              <p>Muito bom ver você!</p>
              <span>{email}</span>
            </div>
          </div>

          <div className="flip-box">
            <div className={`flip-box-inner ${showPass ? "is-flipped" : ""}`}>
              <div className="flip-box-front">
                <div className="dv-inp">
                  <input
                    required
                    type="email"
                    name="Email"
                    value={email}
                    placeholder="Endereço de email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${
                      email.length > 0
                        ? EmailValidator.validate(email)
                          ? ""
                          : "error"
                        : ""
                    }`}
                  />
                  <span>Insira um email válido</span>
                </div>

                <Button
                  onClick={handleEmail}
                  variant="contained"
                  disabled={!EmailValidator.validate(email)}
                >
                  Continuar
                </Button>
              </div>
              <div className="flip-box-back">
                <div className="dv-inp">
                  <input
                    required
                    type={`${showInputPass ? "text" : "password"}`}
                    name="Password"
                    value={password}
                    placeholder="Agora a sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span>No mínimo 6 caracteres</span>

                  {!showInputPass ? (
                    <Tooltip placement="top" title="Exibir senha">
                      <VisibilityIcon onClick={activePass} />
                    </Tooltip>
                  ) : (
                    <Tooltip placement="top" title="Ocultar senha">
                      <VisibilityOffIcon onClick={activePass} />
                    </Tooltip>
                  )}
                </div>

                <Button
                  onClick={() => {}}
                  variant="contained"
                  disabled={password.length < 5}
                >
                  Logar
                </Button>

                <button type="button" onClick={returnLink}>
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="footer-login">
        <div className={`msg-footer ${showPass ? "is-flipped" : ""}`}>
          <div className="dv-msg-footer-inside">
            <span>Não tem uma conta?</span>
            <Link to="">Crie uma!</Link>
          </div>
          <div className="dv-msg-footer-inside dv-msg-footer-back">
            <span>Esqueceu sua senha?</span>
            <Link to="">Clique aqui!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
