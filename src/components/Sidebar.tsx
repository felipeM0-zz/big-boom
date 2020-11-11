import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// CONTEXTS
import CompContext from "../contexts/CompContext";
// STYLES
import SideBarStyles from "../styles/components/Sidebar/Sidebar";

const Sidebar = () => {
  const CompCont = useContext(CompContext);
  const url = useRouteMatch().url;

  return (
    <SideBarStyles id="Sidebar-content">
      <div className="side-box">
        <div className="options-box">
          {CompCont.comp.options.map((v, index) => {
            return (
              <Link to={`${v.route}`} key={index}>
                <p>{v.name}</p>
                <button className={`${url === v.route ? "active" : ""}`}>
                  <span>{v.name}</span>
                  {v.icon}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </SideBarStyles>
  );
};

export default Sidebar;
