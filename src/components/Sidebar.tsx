import React from "react";
import { Button } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import "../styles/components/sidebar.css";

const Sidebar = () => {
  const url = useRouteMatch().url;

  return (
    <div id="Sidebar-content">
      <div className="side-box">
        <div className="options-box">
          <Link to="/main">
            <Button fullWidth>Dashboards</Button>
            {`${url === "/main" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/register">
            <Button fullWidth>Cadastros</Button>
            {`${url === "/register" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/sales">
            <Button fullWidth>Vendas</Button>
            {`${url === "/sales" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/financial">
            <Button fullWidth>Financeiro</Button>
            {`${url === "/financial" ? "active" : ""}` && <div className="marker" />}
          </Link>

          <Link to="/reports">
            <Button fullWidth>Relatórios</Button>
            {`${url === "/reports" ? "active" : ""}` && <div className="marker" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
