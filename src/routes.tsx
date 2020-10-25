import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
// import NewAccount from "./pages/NewAccount";
import Register from "./pages/Register";
import Sales from "./pages/Sales";
import Financial from "./pages/Financial";
import Reports from "./pages/Reports";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/sales" component={Sales} />
        <Route path="/financial" component={Financial} />
        <Route path="/reports" component={Reports} />
        {/* <Route path="/new-account" component={NewAccount} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
