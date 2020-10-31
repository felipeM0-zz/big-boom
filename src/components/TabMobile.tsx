import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
// import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
// import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";

import "../styles/components/tabmobile.css";

const TabMobile = () => {
  const url = useRouteMatch().url;

  return (
    <div id="Tab-content">
      <div className="box-content">
        <Link to="/main">
          <button>
            <DashboardRoundedIcon />
            <span>Dashboards</span>
          </button>
          {`${url === "/main" ? "active" : ""}` && <div className="marker" />}
        </Link>

        <Link to="/register">
          <button>
            <PostAddRoundedIcon />
            <span>Cadastros</span>
          </button>
          {`${url === "/register" ? "active" : ""}` && <div className="marker" />}
        </Link>

        <Link to="/sales">
          <button>
            <AttachMoneyRoundedIcon />
            <span>Vendas</span>
          </button>
          {`${url === "/sales" ? "active" : ""}` && <div className="marker" />}
        </Link>

        <button>
          <AddCircleRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default TabMobile;
