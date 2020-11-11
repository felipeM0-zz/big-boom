import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";
import TabMobile from "../components/TabMobile/TabMobile";

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
