import React from "react";
import { Button } from "@material-ui/core";
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
            <Button fullWidth>
              <span>Dashboards</span>
              <DashboardRoundedIcon />
            </Button>
            {`${url === "/main" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/register">
            <p>Cadastros</p>
            <Button fullWidth>
              <span>Cadastros</span>
              <PostAddRoundedIcon />
            </Button>
            {`${url === "/register" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/sales">
            <p>Vendas</p>
            <Button fullWidth>
              <span>Vendas</span>
              <AttachMoneyRoundedIcon />
            </Button>
            {`${url === "/sales" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/financial">
            <p>Financeiro</p>
            <Button fullWidth>
              <span>Financeiro</span>
              <AccountBalanceRoundedIcon />
            </Button>
            {`${url === "/financial" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/reports">
            <p>Relatórios</p>
            <Button fullWidth>
              <span>Relatórios</span>
              <PictureAsPdfRoundedIcon />
            </Button>
            {`${url === "/reports" ? "active" : ""}` && <div className="marker" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
