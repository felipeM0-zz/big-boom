import { Avatar } from "@material-ui/core";
import React from "react";

import ImgLogo from "../images/logo.png";

import "../styles/components/header.css";

const Sidebar = (props: { title: String; user: String }) => {
  return (
    <div id="Header-content">
      <div className="header-box">
        <div className="info-session">
          <span>{props.title.split(" ").slice(0, 2).join(" ")}</span>
          <span>{props.user.split(" ").slice(0, 2).join(" ")}</span>
        </div>
        <Avatar className="avatar">
          <img src={ImgLogo} alt="Logo" />
        </Avatar>
      </div>
    </div>
  );
};

export default Sidebar;
