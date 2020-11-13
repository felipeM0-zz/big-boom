import React, { useContext } from "react";
// CONTEXTS
import ProfileContext from "../../contexts/ProfileContext";
import DialogsContext from "../../contexts/DialogsContext";
// UTILS
import { Avatar, Tooltip } from "@material-ui/core";
// COMPONENTS
import ProfileDialog from "./Dialogs/ProfileDialog";
// ICONS
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
// STYLES
import Container from "../../styles/components/Header/Header";

const Header = () => {
  const ProfCont = useContext(ProfileContext);
  const DialogsCont = useContext(DialogsContext);

  return (
    <Container id="Header-content">
      <div className="header-box">
        <div className="info-session">
          <span>{ProfCont.prof.backup.company.split(" ").slice(0, 2).join(" ")}</span>
          <span>{ProfCont.prof.backup.user.split(" ").slice(0, 2).join(" ")}</span>
        </div>
        <div className="container-avatar">
          <Avatar className="avatar">
            <img src={ProfCont.prof.backup.image} alt="Logo" />
          </Avatar>
          <Tooltip placement="left-start" title="Perfil">
            <AccountCircleRoundedIcon
              onClick={() => {
                DialogsCont.setDialogs({ ...DialogsCont.dialogs, profile: true });
              }}
            />
          </Tooltip>
        </div>
      </div>
      <ProfileDialog />
    </Container>
  );
};

export default Header;
