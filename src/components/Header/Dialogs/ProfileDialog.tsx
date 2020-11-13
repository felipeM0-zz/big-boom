import React, { useContext, useState } from "react";
import validator from "validator";
import { cpf, cnpj } from "cpf-cnpj-validator";
import InputMask from "react-input-mask";
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
import CancelIcon from "@material-ui/icons/Cancel";
// STYLES
import DialogProfile from "../../../styles/components/Header/Dialogs/DialogProfile";

const ProfileDialog = () => {
  const ProfCont = useContext(ProfileContext);
  const DialogsCont = useContext(DialogsContext);

  const Prof = ProfCont.prof.prof;
  const Backup = ProfCont.prof.backup;

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

  const verifyEditionInput = (current: string, original: string) => {
    return current !== original ? "edited" : "";
  };

  const soShort = (v: string) => {
    return v.trim().indexOf(" ") <= 0 ? "Inferior a 2 nomes" : null;
  };

  const removeSpecials = (v: string) => {
    return v.replace(/[^0-9]+/g, "");
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
            Algumas opções podem não estar disponíveis para edição por conta do seu nível
            de acesso.
          </DialogContentText>

          <div className="info-content">
            <div className="avatar-upload">
              <label htmlFor="upload">
                <div className="hover-state" />
                <div className="dv-content">
                  <img src={Prof.image} alt="Logo" />
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

            <div className="inputs">
              <div>
                <input
                  value={Prof.company}
                  type="text"
                  className={`${verifyEditionInput(Prof.company, Backup.company)}`}
                  placeholder="Nome da empresa"
                  onChange={(e) =>
                    ProfCont.setProf({
                      prof: { ...Prof, company: e.target.value },
                      backup: { ...Backup },
                    })
                  }
                />
                {verifyEditionInput(Prof.company, Backup.company) === "edited" && (
                  <React.Fragment>
                    <p>
                      {validator.isEmpty(Prof.company) ? "Nulo" : soShort(Prof.company)}
                    </p>
                    <CancelIcon />
                  </React.Fragment>
                )}
              </div>

              <div>
                <input
                  value={Prof.user}
                  type="text"
                  className={`${verifyEditionInput(Prof.user, Backup.user)}`}
                  placeholder="Usuário"
                  onChange={(e) =>
                    ProfCont.setProf({
                      prof: { ...Prof, user: e.target.value },
                      backup: { ...Backup },
                    })
                  }
                />
                {verifyEditionInput(Prof.user, Backup.user) === "edited" && (
                  <React.Fragment>
                    <p>{validator.isEmpty(Prof.user) ? "Nulo" : soShort(Prof.user)}</p>
                    <CancelIcon />
                  </React.Fragment>
                )}
              </div>

              <div>
                <InputMask
                  value={Prof.tel}
                  type="text"
                  mask="9999-9999"
                  maskChar={null}
                  placeholder="Telefone (opcional)"
                  onChange={(e) =>
                    ProfCont.setProf({
                      prof: { ...Prof, tel: removeSpecials(e.target.value) },
                      backup: { ...Backup },
                    })
                  }
                  className={`${verifyEditionInput(Prof.tel, Backup.tel)}`}
                />
                {verifyEditionInput(Prof.tel, Backup.tel) === "edited" && (
                  <React.Fragment>
                    <p>
                      {validator.isEmpty(Prof.tel)
                        ? "Nulo"
                        : Prof.tel.length < 8 && "Formato inválido"}
                    </p>
                    <CancelIcon />
                  </React.Fragment>
                )}
              </div>

              <div>
                <InputMask
                  mask="(99) 99999-9999"
                  maskChar={null}
                  value={Prof.cel}
                  type="text"
                  className={`${verifyEditionInput(Prof.cel, Backup.cel)}`}
                  placeholder="Celular"
                  onChange={(e) =>
                    ProfCont.setProf({
                      prof: { ...Prof, cel: removeSpecials(e.target.value) },
                      backup: { ...Backup },
                    })
                  }
                />
                {verifyEditionInput(Prof.cel, Backup.cel) === "edited" && (
                  <React.Fragment>
                    <p>
                      {validator.isEmpty(Prof.cel)
                        ? "Nulo"
                        : Prof.cel.length < 11 && "Formato inválido"}
                    </p>
                    <CancelIcon />
                  </React.Fragment>
                )}
              </div>

              <div>
                <input
                  value={
                    Prof.cpfcnpj.length <= 11
                      ? cpf.format(Prof.cpfcnpj)
                      : cnpj.format(Prof.cpfcnpj)
                  }
                  maxLength={18}
                  type="text"
                  className={`${verifyEditionInput(Prof.cpfcnpj, Backup.cpfcnpj)}`}
                  placeholder="CPF/CNPJ"
                  onChange={(e) =>
                    ProfCont.setProf({
                      prof: { ...Prof, cpfcnpj: removeSpecials(e.target.value) },
                      backup: { ...Backup },
                    })
                  }
                />
                {verifyEditionInput(Prof.cpfcnpj, Backup.cpfcnpj) === "edited" && (
                  <React.Fragment>
                    <p>
                      {validator.isEmpty(Prof.cpfcnpj)
                        ? "Nulo"
                        : Prof.cpfcnpj.length <= 11
                        ? !cpf.isValid(Prof.cpfcnpj) && "CPF inválido"
                        : !cnpj.isValid(Prof.cpfcnpj) && "CPNJ inválido"}
                    </p>
                    <CancelIcon />
                  </React.Fragment>
                )}
              </div>

              <div>
                <input
                  value={Prof.email}
                  type="text"
                  className={`${verifyEditionInput(Prof.email, Backup.email)}`}
                  placeholder="Email"
                  onChange={(e) =>
                    ProfCont.setProf({
                      prof: { ...Prof, email: e.target.value },
                      backup: { ...Backup },
                    })
                  }
                />
                {verifyEditionInput(Prof.email, Backup.email) === "edited" && (
                  <React.Fragment>
                    <p>
                      {validator.isEmpty(Prof.email)
                        ? "Nulo"
                        : !validator.isEmail(Prof.email) && "Email inválido"}
                    </p>
                    <CancelIcon />
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {/* <Button color="primary">Cancel</Button>
          <Button color="primary">Subscribe</Button> */}
        </DialogActions>
      </DialogProfile>

      <CropperDialog image={image} />
    </React.Fragment>
  );
};

export default ProfileDialog;
