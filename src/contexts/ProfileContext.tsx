import React from "react";

import ImgLogo from "../images/logo.png";

// TYPES
interface PropsSetState {
  prof: {
    company: string;
    user: string;
    tel: string;
    cel: string;
    cpfcnpj: string;
    email: string;
    image: string;
  };
  backup: {
    company: string;
    user: string;
    tel: string;
    cel: string;
    cpfcnpj: string;
    email: string;
    image: string;
  };
}

const DefaultValue = {
  prof: {
    prof: {
      company: "BigBoom Company",
      user: "Felipe Moreira",
      tel: "33813386",
      cel: "98996119832",
      cpfcnpj: "07641455336",
      email: "bigboom@gmail.com",
      image: `${ImgLogo}`,
    },
    backup: {
      company: "BigBoom Company",
      user: "Felipe Moreira",
      tel: "33813386",
      cel: "98996119832",
      cpfcnpj: "07641455336",
      email: "bigboom@gmail.com",
      image: `${ImgLogo}`,
    },
  },
  setProf: (state: PropsSetState) => {},
};

const ProfileContext = React.createContext(DefaultValue);

export default ProfileContext;
