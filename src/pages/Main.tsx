import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TabMobile from "../components/TabMobile";

import { Container } from "../styles/pages/main";

const Main = () => {
  return (
    <Container>
      <Sidebar />
      <div className="main-content">
        <Header
          title="BigBoom Company BigBoom Company BigBoom Company"
          user="Felipe Moreira"
        />
        <div className="main-general">
          <h1>Conteudo</h1>
        </div>
        <TabMobile />
      </div>
    </Container>
  );
};

export default Main;
