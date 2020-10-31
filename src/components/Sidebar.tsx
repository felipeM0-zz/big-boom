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
            <button>
              <span>Dashboards</span>
              <DashboardRoundedIcon />
            </button>
            {`${url === "/main" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/register">
            <p>Cadastros</p>
            <button>
              <span>Cadastros</span>
              <PostAddRoundedIcon />
            </button>
            {`${url === "/register" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/sales">
            <p>Vendas</p>
            <button>
              <span>Vendas</span>
              <AttachMoneyRoundedIcon />
            </button>
            {`${url === "/sales" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/financial">
            <p>Financeiro</p>
            <button>
              <span>Financeiro</span>
              <AccountBalanceRoundedIcon />
            </button>
            {`${url === "/financial" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/reports">
            <p>Relatórios</p>
            <button>
              <span>Relatórios</span>
              <PictureAsPdfRoundedIcon />
            </button>
            {`${url === "/reports" ? "active" : ""}` && <div className="marker" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
