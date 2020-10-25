import React from "react";
import Sidebar from "../components/Sidebar";

import "../styles/pages/financial.css";

const Financial = () => {
  return (
    <div id="Financial-content">
      <Sidebar />
      <div className="financial-content"></div>
    </div>
  );
};

export default Financial;
