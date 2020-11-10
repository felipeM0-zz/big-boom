import React, { useContext, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import CompContext from "../contexts/CompContext";
import { DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import Swal from "sweetalert2";

import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import CloseIcon from "@material-ui/icons/Close";

import TabMobileStyle from "../styles/components/TabMobile/tabMobile";
import DialogOptions from "../styles/components/TabMobile/dialogOptions";

const TabMobile = () => {
  const url = useRouteMatch().url;
  const CompCont = useContext(CompContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [numSelected, setNumSelected] = useState(0);

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
    let array = [""];

    document
      .getElementById("show-options")
      ?.querySelectorAll("div.active span")
      .forEach((e) => {
        array.push(e.innerHTML);
      });

    CompCont.setState({ tabmobile: array, options: CompCont.state.options });
    setOpenDialog(false);
  };

  const verifySelected = (v: string) => {
    for (let i = 0; i < CompCont.state.tabmobile.length; i++) {
      if (v === CompCont.state.tabmobile[i]) {
        return { status: "active", bool: true };
      }
    }
  };

  return (
    <TabMobileStyle id="Tab-content">
      <div className="box-content">
        {CompCont.state.options.map((v, index) => {
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

        <button
          onClick={() => setOpenDialog(true)}
          className={`${openDialog ? "active" : ""}`}
        >
          <AddCircleRoundedIcon />
        </button>
      </div>

      <DialogOptions
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
            {CompCont.state.options.map((v, index) => {
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
              {CompCont.state.options.map((v, index) => {
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
      </DialogOptions>
    </TabMobileStyle>
  );
};

export default TabMobile;
