import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import Swal from "sweetalert2";

import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

import CloseIcon from "@material-ui/icons/Close";

import "../styles/components/tabmobile.css";

const TabMobile = () => {
  const url = useRouteMatch().url;
  const [openDialog, setOpenDialog] = useState(false);
  const [numSelected, setNumSelected] = useState(0);

  const options = [
    { name: "Dashboards", route: "/main", icon: <DashboardRoundedIcon /> },
    { name: "Cadastros", route: "/register", icon: <PostAddRoundedIcon /> },
    { name: "Vendas", route: "/sales", icon: <AttachMoneyRoundedIcon /> },
    { name: "Financeiro", route: "/financial", icon: <AccountBalanceRoundedIcon /> },
    { name: "Relatório", route: "/reports", icon: <PictureAsPdfRoundedIcon /> },
  ];

  const [defaultValues, setDefaultValues] = useState([
    "Dashboards",
    "Cadastros",
    "Financeiro",
  ]);

  const verifyOptions = () => {
    let cont = 0;

    document
      .getElementById("show-options")
      ?.querySelectorAll("div")
      .forEach((e) => {
        if (e.classList.contains("active")) {
          cont += 1;
        }
      });

    return cont;
  };

  const handleOptionsTab = (el: any) => {
    verifyOptions() < 3 && !el.classList.contains("active")
      ? el.classList.add("active")
      : verifyOptions() >= 3 && !el.classList.contains("active")
      ? msgSwal("Aviso", "<p>Limite atingido <br>(máximo 3)</p>", "error", 4000)
      : verifyOptions() <= 3 &&
        el.classList.contains("active") &&
        el.classList.remove("active");

    setNumSelected(verifyOptions());
  };

  const msgSwal = (title: any, html: any, icon: any, timer: any) => {
    Swal.fire({
      title: title,
      html: html,
      icon: icon,
      timer: timer,
      showConfirmButton: false,
    });
  };

  const handleTabApply = () => {
    let array: string[] = [];

    document
      .getElementById("show-options")
      ?.querySelectorAll("div.active span")
      .forEach((e) => {
        array.push(e.innerHTML);
        setDefaultValues([...array]);
      });

    setOpenDialog(false);
  };

  const verifySelected = (v: string) => {
    for (let i = 0; i < defaultValues.length; i++) {
      if (v === defaultValues[i]) {
        return { status: "active", bool: true };
      }
    }
  };

  return (
    <div id="Tab-content">
      <div className="box-content">
        {options.map((v, index) => {
          if (verifySelected(v.name)) {
            return (
              <Link key={index} to={v.route}>
                <button className={`${url === v.route ? "active" : ""}`}>
                  {v.icon}
                  <span>{v.name}</span>
                </button>
              </Link>
            );
          } else {
            return null;
          }
        })}

        {!openDialog && (
          <button onClick={() => setOpenDialog(true)}>
            <AddCircleRoundedIcon />
          </button>
        )}
      </div>

      <Dialog
        open={openDialog}
        className="dialog-plus"
        onRendered={() => setNumSelected(verifyOptions())}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>
          <span>Outras opções</span>
          <CloseIcon onClick={() => setOpenDialog(false)} />
        </DialogTitle>

        <DialogContent>
          <div className="not-visibles">
            {options.map((v, index) => {
              if (!verifySelected(v.name)?.bool) {
                return (
                  <Link
                    key={index}
                    to={v.route}
                    onClick={() => setOpenDialog(false)}
                  >
                    <button>
                      <span>{v.name}</span>
                    </button>
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className="show-content">
            <p>Exibição</p>
            <div id="show-options" className="show-options">
              {options.map((v, index) => {
                return (
                  <div
                    key={index}
                    className={`${verifySelected(v.name)?.status}`}
                    onClick={(e) => handleOptionsTab(e.currentTarget)}
                  >
                    <span>{v.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button disabled={numSelected < 3 ? true : false} onClick={handleTabApply}>
            <span>Aplicar</span>
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TabMobile;
