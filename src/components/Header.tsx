import React, { useContext, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";
import DialogsContext from "../contexts/DialogsContext";
import {
  Avatar,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

import Cropper from "react-cropper";

import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";

import Container from "../styles/components/Header/header";
import DialogHeader from "../styles/components/Header/dialogHeader";
import DialogCropper from "../styles/components/Header/dialogCropper";

const Header = () => {
  const ProfCont = useContext(ProfileContext);
  const DialogsCont = useContext(DialogsContext);

  const [image, setImage] = useState("");
  const [cropper, setCropper] = useState<any>();

  const onChange = (e: any) => {
    e.preventDefault();
    let files;

    files = e.dataTransfer ? e.dataTransfer.files : e.target && e.target.files;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
      DialogsCont.setDialogs({ ...DialogsCont.dialogs, cropper: true });
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      ProfCont.setProf({
        ...ProfCont.prof,
        image: cropper.getCroppedCanvas().toDataURL(),
      });
    }
  };

  return (
    <Container id="Header-content">
      <div className="header-box">
        <div className="info-session">
          <span>{ProfCont.prof.company.split(" ").slice(0, 2).join(" ")}</span>
          <span>{ProfCont.prof.user.split(" ").slice(0, 2).join(" ")}</span>
        </div>
        <div className="container-avatar">
          <Avatar className="avatar">
            <img src={ProfCont.prof.image} alt="Logo" />
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

      <DialogHeader
        className="profile-dialog"
        open={DialogsCont.dialogs.profile}
        onClose={() => {
          DialogsCont.setDialogs({ ...DialogsCont.dialogs, profile: false });
        }}
      >
        <DialogTitle>
          <span>Preferências</span>
          <CloseIcon
            onClick={() => {
              DialogsCont.setDialogs({ ...DialogsCont.dialogs, profile: false });
            }}
          />
        </DialogTitle>

        <DialogContent className="profile-content">
          <DialogContentText>
            <InfoIcon />
            Algumas opções podem não estar disponíveis para edição por conta do seu
            nível de acesso.
          </DialogContentText>
          <DialogActions>
            <div className="info-content">
              <div className="avatar-upload">
                <label htmlFor="upload">
                  <div className="hover-state" />
                  <div className="dv-content">
                    <img src={ProfCont.prof.image} alt="Logo" />
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => onChange(e)}
                        name="upload"
                        id="upload"
                      />
                    </div>
                  </div>
                  <span>Editar image</span>
                </label>
              </div>
            </div>
          </DialogActions>
        </DialogContent>
      </DialogHeader>

      <DialogCropper
        open={DialogsCont.dialogs.cropper}
        className="profile-cropper"
        onClose={() =>
          DialogsCont.setDialogs({ ...DialogsCont.dialogs, cropper: false })
        }
      >
        <DialogTitle>
          <span>Ajuste sua imagem</span>
          <CloseIcon
            onClick={() =>
              DialogsCont.setDialogs({ ...DialogsCont.dialogs, cropper: false })
            }
          />
        </DialogTitle>

        <DialogContent>
          <Cropper
            className="cropper-box"
            initialAspectRatio={1}
            aspectRatio={1 / 1}
            src={image}
            viewMode={1}
            guides={true}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            onInitialized={(instance: any) => {
              setCropper(instance);
            }}
          />
        </DialogContent>
        <DialogActions>
          <button
            onClick={() => {
              getCropData();
              DialogsCont.setDialogs({ ...DialogsCont.dialogs, cropper: false });
            }}
          >
            <span>Pronto!</span>
          </button>
        </DialogActions>
      </DialogCropper>
    </Container>
  );
};

export default Header;
