import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import "../styles/pages/main.css";

const Main = () => {
  return (
    <div id="Main-content">
      <Sidebar />
      <div className="main-content">
        <Header
          title="BigBoom Company BigBoom Company BigBoom Company"
          user="Felipe Moreira"
        />
      </div>
    </div>
  );
};

export default Main;
