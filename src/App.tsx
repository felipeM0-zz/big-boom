import React, { useState, useContext } from "react";
import Routes from "./routes";
// CONTEXTS
import CompContext from "./contexts/CompContext";
import ProfileContext from "./contexts/ProfileContext";
import DialogsContext from "./contexts/DialogsContext";
// STYLES
import "./styles/global.css";
import "cropperjs/dist/cropper.css";

function App() {
  const CompCont = useContext(CompContext);
  const ProfCont = useContext(ProfileContext);
  const DialogsCont = useContext(DialogsContext);

  const [comp, setComp] = useState({
    tabmobile: CompCont.comp.tabmobile,
    options: CompCont.comp.options,
  });

  const [prof, setProf] = useState({
    prof: ProfCont.prof.prof,
    backup: ProfCont.prof.backup,
  });

  const [dialogs, setDialogs] = useState({
    profile: DialogsCont.dialogs.profile,
    cropper: DialogsCont.dialogs.cropper,
    optionstab: DialogsCont.dialogs.optionstab,
  });

  return (
    <CompContext.Provider value={{ comp, setComp }}>
      <ProfileContext.Provider value={{ prof, setProf }}>
        <DialogsContext.Provider value={{ dialogs, setDialogs }}>
          <Routes />
        </DialogsContext.Provider>
      </ProfileContext.Provider>
    </CompContext.Provider>
  );
}

export default App;
