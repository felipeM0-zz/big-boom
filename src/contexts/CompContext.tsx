import React from "react";

import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";

// TYPES
interface PropsSetState {
  tabmobile: string[];
  readonly options: Array<{ name: string; route: string; icon: JSX.Element }>;
}

const DefaultValue = {
  state: {
    tabmobile: ["Dashboards", "Cadastros", "Financeiro"],
    options: [
      { name: "Dashboards", route: "/main", icon: <DashboardRoundedIcon /> },
      { name: "Cadastros", route: "/register", icon: <PostAddRoundedIcon /> },
      { name: "Vendas", route: "/sales", icon: <AttachMoneyRoundedIcon /> },
      {
        name: "Financeiro",
        route: "/financial",
        icon: <AccountBalanceRoundedIcon />,
      },
      { name: "Relatório", route: "/reports", icon: <PictureAsPdfRoundedIcon /> },
    ],
  },
  setState: (state: PropsSetState) => {},
};

const CompContext = React.createContext(DefaultValue);

export default CompContext;
