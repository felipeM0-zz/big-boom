import React, { useContext, useState } from "react";
// CONTEXTS
import ProfileContext from "../../../contexts/ProfileContext";
import DialogsContext from "../../../contexts/DialogsContext";
// UTILS
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
// COMPONENTS
import CropperDialog from "./CropperDialog";
// ICONS
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
// STYLES
import DialogProfile from "../../../styles/components/Header/DialogProfile";

const ProfileDialog = () => {
  const ProfCont = useContext(ProfileContext);
  const DialogsCont = useContext(DialogsContext);

  const [image, setImage] = useState<string>("");

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

  return (
    <React.Fragment>
      <DialogProfile
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
      </DialogProfile>

      <CropperDialog image={image} />
    </React.Fragment>
  );
};

export default ProfileDialog;
