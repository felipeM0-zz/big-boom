import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
