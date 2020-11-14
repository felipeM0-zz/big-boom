import React, { useContext, useState } from "react";
// CONTEXTS
import ProfileContext from "../../../contexts/ProfileContext";
import DialogsContext from "../../../contexts/DialogsContext";
// UTILS
import { Cropper } from "react-cropper";
import { DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
// ICONS
import CloseIcon from "@material-ui/icons/Close";
// STYLES
import DialogCropper from "../../../styles/components/HeaderStyle/Dialogs/DialogCropper";

const CropperDialog = (props: { image: string | undefined }) => {
  const ProfCont = useContext(ProfileContext);
  const DialogsCont = useContext(DialogsContext);

  const [cropper, setCropper] = useState<any>();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      ProfCont.setProf({
        prof: { ...ProfCont.prof.prof, image: cropper.getCroppedCanvas().toDataURL() },
        backup: { ...ProfCont.prof.backup },
      });
    }
  };

  return (
    <DialogCropper
      open={DialogsCont.dialogs.cropper}
      className="profile-cropper"
      onClose={() => DialogsCont.setDialogs({ ...DialogsCont.dialogs, cropper: false })}
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
          src={props.image}
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
  );
};

export default CropperDialog;
