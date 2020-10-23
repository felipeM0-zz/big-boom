import React, { FormEvent, useState } from "react";
import * as EmailValidator from "email-validator";
import { Button, Tooltip } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import LogoImg from "../images/logo.png";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import "../styles/pages/login.css";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showInputPass, setShowInputPass] = useState(false);
  const [next, setNext] = useState("");

  const handleEmail = (e: FormEvent) => {
    e.preventDefault();

    let inpEmail = document.getElementById("email-form")?.querySelector("input");

    if (
      inpEmail?.classList.contains("error") ||
      email.length <= 0 ||
      !EmailValidator.validate(email)
    ) {
      alert("Verifique o campo EMAIL");
      return;
    } else {
      setShowPass(true);
      setTimeout(() => {
        document.getElementById("pass-form")?.querySelector("input")?.focus();
      }, 500);
    }
  };

  const handlePass = (e: FormEvent) => {
    e.preventDefault();

    let inpEmail = document.getElementById("email-form")?.querySelector("input");
    let inpPass = document.getElementById("pass-form")?.querySelector("input");

    if (
      inpEmail?.classList.contains("error") ||
      email.length <= 0 ||
      !EmailValidator.validate(email)
    ) {
      alert("Verifique o campo EMAIL");
      return;
    }

    if (
      inpPass?.classList.contains("error") ||
      password.length <= 0 ||
      (password.length >= 1 && password.length <= 5)
    ) {
      alert("verifique o campo SENHA");
      return;
    } else {
      setNext("next");
      goToNext("main");
    }
  };

  const goToNext = (url: String) => {
    setTimeout(() => {
      history.push(`/${url}`);
    }, 500);
  };

  const returnLink = () => {
    let elem = document.getElementById("pass-form")?.parentElement;

    elem?.classList.remove("is-flipped");
    setShowPass(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div id="Login-content">
      <div className="bg-move-gradient" />
      <div>
        <div className={`first-box ${next}`}>
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
              <form
                id="email-form"
                onSubmit={handleEmail}
                className="dv-msg-middle-inside"
              >
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
                  type="submit"
                  variant="contained"
                  className="btn-principal"
                  disabled={!EmailValidator.validate(email)}
                >
                  Continuar
                </Button>
              </form>
              <form
                id="pass-form"
                onSubmit={handlePass}
                className="dv-msg-middle-inside dv-msg-middle-back"
              >
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
                  variant="contained"
                  className="btn-principal"
                  disabled={password.length <= 5}
                >
                  Logar
                </Button>

                <button type="button" onClick={returnLink}>
                  Voltar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-login">
        <div className={`msg-footer ${showPass ? "is-flipped" : ""}`}>
          <div className="dv-msg-footer-inside">
            <span>Não tem uma conta?</span>
            <button
              onClick={() => {
                setNext("next");
                goToNext("new-account");
              }}
            >
              <span>Crie uma!</span>
            </button>
          </div>
          <div className="dv-msg-footer-inside dv-msg-footer-back">
            <span>Esqueceu sua senha?</span>
            <button>
              <span>Clique aqui!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
