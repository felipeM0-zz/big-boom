import React, { useEffect, useState } from "react";

import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

import Cropper from "react-cropper";

import ImgLogo from "../images/logo.png";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";

import "../styles/components/header.css";
import "cropperjs/dist/cropper.css";
import "../styles/Demo.css";

const Header = (props: { title: String; user: String }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [showCropper, setShowCropper] = useState(false);

  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>();

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  useEffect(() => {
    console.log(cropper);
  }, [cropper]);

  return (
    <div id="Header-content">
      <div className="header-box">
        <div className="info-session">
          <span>{props.title.split(" ").slice(0, 2).join(" ")}</span>
          <span>{props.user.split(" ").slice(0, 2).join(" ")}</span>
        </div>
        <div className="container-avatar">
          <Avatar className="avatar">
            <img src={cropData !== "" ? cropData : ImgLogo} alt="Logo" />
          </Avatar>
          <Tooltip placement="left-start" title="Perfil">
            <AccountCircleRoundedIcon onClick={() => setOpenProfile(true)} />
          </Tooltip>
        </div>
      </div>

      <Dialog
        className="profile-dialog"
        open={openProfile}
        onClose={() => setOpenProfile(false)}
      >
        <div className="dialog-header">
          <DialogTitle id="simple-dialog-title">Preferências</DialogTitle>
          <CloseIcon onClick={() => setOpenProfile(false)} />
        </div>
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
                  <div className="hover-state"></div>
                  <div className="dv-content">
                    <img src={cropData !== "" ? cropData : ImgLogo} alt="Logo" />
                    <div>
                      <input
                        type="file"
                        onChange={(e) => {
                          onChange(e);
                          setShowCropper(true);
                        }}
                        name="upload"
                        id="upload"
                      />
                    </div>
                  </div>
                  <span>Editar image</span>
                </label>
              </div>

              {showCropper && (
                <Dialog open={showCropper} onClose={() => setShowCropper(false)}>
                  <DialogTitle>Ajuste sua imagem</DialogTitle>

                  <DialogContent>
                    <Cropper
                      style={{ height: 400, width: "100%" }}
                      initialAspectRatio={1}
                      aspectRatio={1 / 1}
                      // preview=".img-preview" // MOSTRAR PRÉVIA SE NECESSÁRIO
                      src={image}
                      viewMode={1}
                      guides={true}
                      minCropBoxHeight={10}
                      minCropBoxWidth={10}
                      background={false}
                      responsive={true}
                      autoCropArea={1}
                      checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                      onInitialized={(instance: any) => {
                        setCropper(instance);
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        getCropData();
                        setShowCropper(false);
                      }}
                    >
                      Pronto
                    </Button>
                  </DialogActions>
                </Dialog>
              )}
            </div>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
