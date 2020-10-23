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
    setEmail("");
    setPassword("");
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
            <div className={`msg-middle ${showPass ? "is-flipped" : ""}`}>
              <div className="dv-msg-middle-inside">
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
                  type="button"
                  onClick={handleEmail}
                  variant="contained"
                  className="btn-principal"
                  disabled={!EmailValidator.validate(email)}
                >
                  Continuar
                </Button>
              </div>
              <div className="dv-msg-middle-inside dv-msg-middle-back">
                <div className="dv-inp">
                  <input
                    required
                    name="Password"
                    value={password}
                    placeholder="Agora a sua senha"
                    type={`${showInputPass ? "text" : "password"}`}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${
                      password.length > 0
                        ? password.length >= 6
                          ? ""
                          : "error"
                        : ""
                    }`}
                  />
                  <span>No mínimo 6 caracteres</span>

                  {!showInputPass ? (
                    <Tooltip placement="top" title="Exibir senha">
                      <VisibilityIcon
                        onClick={() => setShowInputPass(!showInputPass)}
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip placement="top" title="Ocultar senha">
                      <VisibilityOffIcon
                        onClick={() => setShowInputPass(!showInputPass)}
                      />
                    </Tooltip>
                  )}
                </div>

                <Button
                  type="submit"
                  onClick={() => {}}
                  variant="contained"
                  className="btn-principal"
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
