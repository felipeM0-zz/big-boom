import React from "react";
import Sidebar from "../components/SidebarComp/Sidebar";
import Header from "../components/HeaderComp/Header";
import TabMobile from "../components/TabMobileComp/TabMobile";

import { Container } from "../styles/pages/main";

const Main = () => {
  return (
    <Container>
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="main-general">
          <h1>Conteudo</h1>
        </div>
        <TabMobile />
      </div>
    </Container>
  );
};

export default Main;
