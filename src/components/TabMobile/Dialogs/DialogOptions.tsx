import React, { useContext, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// CONTEXTS
import CompContext from "../../../contexts/CompContext";
import DialogsContext from "../../../contexts/DialogsContext";
// UTILS
import { DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import msgSwal from "../../../utils/Swal";
// ICONS
import CloseIcon from "@material-ui/icons/Close";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
// STYLES
import OptionsDialog from "../../../styles/components/TabMobile/OptionsDialog";

const DialogOptions = () => {
  const url = useRouteMatch().url;
  const CompCont = useContext(CompContext);
  const DialogCont = useContext(DialogsContext);

  const [numSelected, setNumSelected] = useState(0);

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

  const handleTabApply = () => {
    let array = [""];

    document
      .getElementById("show-options")
      ?.querySelectorAll("div.active span")
      .forEach((e) => {
        array.push(e.innerHTML);
      });

    CompCont.setComp({ tabmobile: array, options: CompCont.comp.options });
    DialogCont.setDialogs({ ...DialogCont.dialogs, optionstab: false });
  };

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

  const verifySelected = (v: string) => {
    for (let i = 0; i < CompCont.comp.tabmobile.length; i++) {
      if (v === CompCont.comp.tabmobile[i]) {
        return { status: "active", bool: true };
      }
    }
  };

  return (
    <OptionsDialog
      open={DialogCont.dialogs.optionstab}
      className="dialog-plus"
      onRendered={() => setNumSelected(verifyOptions())}
      onClose={() => DialogCont.setDialogs({ ...DialogCont.dialogs, optionstab: false })}
    >
      <div className="box-content">
        <DialogTitle>
          <span>Outras opções</span>
          <CloseIcon
            onClick={() =>
              DialogCont.setDialogs({ ...DialogCont.dialogs, optionstab: false })
            }
          />
        </DialogTitle>

        <DialogContent>
          <div className="not-visibles">
            {CompCont.comp.options.map((v, index) => {
              if (!verifySelected(v.name)?.bool) {
                return (
                  <Link
                    key={index}
                    to={v.route}
                    onClick={() =>
                      DialogCont.setDialogs({
                        ...DialogCont.dialogs,
                        optionstab: false,
                      })
                    }
                  >
                    <button>
                      <span>{v.name}</span>
                      {url === v.route && <FiberManualRecordIcon />}
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
              {CompCont.comp.options.map((v, index) => {
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
      </div>
    </OptionsDialog>
  );
};

export default DialogOptions;
