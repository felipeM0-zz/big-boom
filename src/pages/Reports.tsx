import React from "react";
import Sidebar from "../components/SidebarComp/Sidebar";

import "../styles/pages/reports.css";

const Reports = () => {
  return (
    <div id="Reports-content">
      <Sidebar />
      <div className="reports-content"></div>
    </div>
  );
};

export default Reports;
