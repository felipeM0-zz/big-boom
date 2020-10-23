import React, { FormEvent, useState } from "react";
import * as EmailValidator from "email-validator";
import { Button, Tooltip } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "Aviso",
        html: "Campo <strong>EMAIL</strong> inválido",
        icon: "error",
        timer: 0,
        confirmButtonText: "OK",
        confirmButtonColor: "#221e22",
      });

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
      Swal.fire({
        title: "Aviso",
        html: "Campo <strong>SENHA</strong> inválido",
        icon: "error",
        timer: 0,
        confirmButtonText: "OK",
      });
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

  const recoverPass = () => {
    Swal.fire({
      title: "Recuperação de senha",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
        placeholder: "Insira seu email",
      },
      showCancelButton: true,
      confirmButtonText: "Enviar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const response = await fetch(``);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage("Email não reconhecido");
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
      allowEscapeKey: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmação",
          html: `Link de recuperação enviado para <strong>${result.value.login}</strong>, verifique seu email (e não esqueça da caixa de SPAM)`,
        });
      }
    });
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
            <button onClick={recoverPass}>
              <span>Clique aqui!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
