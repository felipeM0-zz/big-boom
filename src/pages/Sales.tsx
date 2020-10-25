import React from "react";
import Sidebar from "../components/Sidebar";

import "../styles/pages/sales.css";

const Sales = () => {
  return (
    <div id="Sales-content">
      <Sidebar />
      <div className="sales-content"></div>
    </div>
  );
};

export default Sales;
