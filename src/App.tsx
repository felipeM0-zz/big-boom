import React, { useState, useContext } from "react";
import Routes from "./routes";
import CompContext from "./contexts/CompContext";

import "./styles/global.css";
import "cropperjs/dist/cropper.css";

function App() {
  const CompCont = useContext(CompContext);
  const [state, setState] = useState({
    tabmobile: CompCont.state.tabmobile,
    options: CompCont.state.options,
  });

  return (
    <CompContext.Provider value={{ state, setState }}>
      <Routes />
    </CompContext.Provider>
  );
}

export default App;
