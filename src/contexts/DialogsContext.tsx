import React from "react";

// TYPES
interface PropsSetState {
  profile: boolean;
  cropper: boolean;
  optionstab: boolean;
}

const DefaultValue = {
  dialogs: {
    profile: false,
    cropper: false,
    optionstab: false,
  },
  setDialogs: (state: PropsSetState) => {},
};

const DialogsContext = React.createContext(DefaultValue);

export default DialogsContext;
