import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// CONTEXTS
import CompContext from "../../contexts/CompContext";
import DialogsContext from "../../contexts/DialogsContext";
// COMPONENTS
import DialogOptions from "./Dialogs/DialogOptions";
// ICONS
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
// STYLES
import TabMobileStyle from "../../styles/components/TabMobile/TabMobile";

const TabMobile = () => {
  const url = useRouteMatch().url;
  const CompCont = useContext(CompContext);
  const DialogCont = useContext(DialogsContext);

  const verifySelected = (v: string) => {
    for (let i = 0; i < CompCont.comp.tabmobile.length; i++) {
      if (v === CompCont.comp.tabmobile[i]) {
        return { status: "active", bool: true };
      }
    }
  };

  return (
    <React.Fragment>
      <TabMobileStyle id="Tab-content">
        <div className="box-content">
          {CompCont.comp.options.map((v, index) => {
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
            onClick={() =>
              DialogCont.setDialogs({ ...DialogCont.dialogs, optionstab: true })
            }
            className={`${DialogCont.dialogs.optionstab ? "active" : ""}`}
          >
            <AddCircleRoundedIcon />
          </button>
        </div>
      </TabMobileStyle>

      <DialogOptions />
    </React.Fragment>
  );
};

export default TabMobile;
