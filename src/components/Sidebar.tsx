import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";

import "../styles/components/sidebar.css";

const Sidebar = () => {
  const url = useRouteMatch().url;

  return (
    <div id="Sidebar-content">
      <div className="side-box">
        <div className="options-box">
          <Link to="/main">
            <p>Dashboards</p>
            <button className={`${url === "/main" ? "active" : ""}`}>
              <span>Dashboards</span>
              <DashboardRoundedIcon />
            </button>
          </Link>

          <Link to="/register">
            <p>Cadastros</p>
            <button className={`${url === "/register" ? "active" : ""}`}>
              <span>Cadastros</span>
              <PostAddRoundedIcon />
            </button>
          </Link>

          <Link to="/sales">
            <p>Vendas</p>
            <button className={`${url === "/sales" ? "active" : ""}`}>
              <span>Vendas</span>
              <AttachMoneyRoundedIcon />
            </button>
          </Link>

          <Link to="/financial">
            <p>Financeiro</p>
            <button className={`${url === "/financial" ? "active" : ""}`}>
              <span>Financeiro</span>
              <AccountBalanceRoundedIcon />
            </button>
          </Link>

          <Link to="/reports">
            <p>Relatórios</p>
            <button className={`${url === "/reports" ? "active" : ""}`}>
              <span>Relatórios</span>
              <PictureAsPdfRoundedIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
