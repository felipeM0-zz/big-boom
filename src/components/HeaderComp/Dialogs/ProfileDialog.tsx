import React, { useContext, useEffect, useState } from "react";
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
  Tooltip,
} from "@material-ui/core";
import {
  verifyError,
  verifyChanges,
  verifyEditionInput,
} from "../../../utils/utilsProfile";
// COMPONENTS
import CropperDialog from "./CropperDialog";
// ICONS
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import CancelIcon from "@material-ui/icons/Cancel";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
// STYLES
import DialogProfile from "../../../styles/components/HeaderStyle/Dialogs/DialogProfile";

const ProfileDialog = () => {
  const ProfCont = useContext(ProfileContext);
  const DialogsCont = useContext(DialogsContext);

  const Prof = ProfCont.prof.prof;
  const Backup = ProfCont.prof.backup;

  const [image, setImage] = useState<string>("");
  const [modified, setModified] = useState(false);

  // AO ESCOLHER OUTRA IMAGEM NO INPUT
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

  // REMOVE TODOS OS CARACATERES ESPECIAIS E MANTÉM APENAS NÚMEROS
  const removeSpecials = (v: string) => {
    return v.replace(/[^0-9]+/g, "");
  };

  // REINICIA O VALOR DO INPUT PARA O ÚLTIMO EM BACKUP NO CONTEXT
  const restartValue = (v: string, e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    let elem = e?.target as HTMLAreaElement;
    let backup_k: string[] = Object.keys(Backup);
    let backup_v: string[] = Object.values(Backup);

    let svg = elem.localName === "path" ? (elem.parentNode as HTMLAreaElement) : elem;

    svg?.classList.remove("active");
    svg?.addEventListener("animationend", () => {
      for (let i = 0; i < backup_k.length; i++) {
        if (backup_k[i] === v) {
          ProfCont.setProf({
            prof: { ...Prof, [v]: backup_v[i] },
            backup: { ...Backup },
          });
        }
      }
    });
  };

  // SALVAR ALTERAÇÕES
  const saveAll = () => {
    ProfCont.setProf({
      prof: { ...Prof },
      backup: { ...Prof },
    });

    DialogsCont.setDialogs({
      ...DialogsCont.dialogs,
      profile: false,
    });
  };

  // VERIFICA MUDANÇAS (EDITED) E ERROS SEMPRE QUE PROF/BACKUP MUDA
  useEffect(() => {
    let elems = document.getElementById("dv-inputs")?.querySelectorAll("p");

    setModified(verifyChanges(Prof, Backup));

    elems?.forEach((v) => {
      setModified(v.classList.contains("error"));
    });
  }, [Prof, Backup]);

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
              {Prof.image !== Backup.image && (
                <Tooltip title="Reverter alterações" placement="right">
                  <CancelIcon
                    className="active"
                    onClick={(e) => restartValue("image", e)}
                  />
                </Tooltip>
              )}
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

            <div className="inputs" id="dv-inputs">
              <div>
                <LocationCityIcon />
                <div>
                  <input
                    type="text"
                    value={Prof.company}
                    placeholder="Nome da empresa"
                    className={`${verifyEditionInput(Prof.company, Backup.company)[0]}`}
                    onChange={(e) =>
                      ProfCont.setProf({
                        prof: { ...Prof, company: e.target.value },
                        backup: { ...Backup },
                      })
                    }
                  />
                  {verifyEditionInput(Prof.company, Backup.company)[1] && (
                    <React.Fragment>
                      <p className={`${verifyError(Prof.company, "short")[0]}`}>
                        {verifyError(Prof.company, "short")[1]}
                      </p>
                      <Tooltip title="Reverter alterações" placement="left">
                        <CancelIcon
                          className="active"
                          onClick={(e) => restartValue("company", e)}
                        />
                      </Tooltip>
                    </React.Fragment>
                  )}
                </div>
              </div>

              <div>
                <PersonIcon />
                <div>
                  <input
                    type="text"
                    value={Prof.user}
                    placeholder="Usuário"
                    className={`${verifyEditionInput(Prof.user, Backup.user)[0]}`}
                    onChange={(e) =>
                      ProfCont.setProf({
                        prof: { ...Prof, user: e.target.value },
                        backup: { ...Backup },
                      })
                    }
                  />
                  {verifyEditionInput(Prof.user, Backup.user)[1] && (
                    <React.Fragment>
                      <p className={`${verifyError(Prof.user, "short")[0]}`}>
                        {verifyError(Prof.user, "short")[1]}
                      </p>
                      <Tooltip title="Reverter alterações" placement="left">
                        <CancelIcon
                          className="active"
                          onClick={(e) => restartValue("user", e)}
                        />
                      </Tooltip>
                    </React.Fragment>
                  )}
                </div>
              </div>

              <div>
                <PhoneIcon />
                <div>
                  <InputMask
                    type="tel"
                    maskChar={null}
                    mask="9999-9999"
                    value={Prof.tel}
                    inputMode="numeric"
                    placeholder="Telefone (opcional)"
                    className={`${verifyEditionInput(Prof.tel, Backup.tel)[0]}`}
                    onChange={(e) =>
                      ProfCont.setProf({
                        prof: { ...Prof, tel: removeSpecials(e.target.value) },
                        backup: { ...Backup },
                      })
                    }
                  />
                  {verifyEditionInput(Prof.tel, Backup.tel)[1] && (
                    <React.Fragment>
                      <p className={`${verifyError(Prof.tel, "inf8")[0]}`}>
                        {verifyError(Prof.tel, "inf8")[1]}
                      </p>
                      <Tooltip title="Reverter alterações" placement="left">
                        <CancelIcon
                          className="active"
                          onClick={(e) => restartValue("tel", e)}
                        />
                      </Tooltip>
                    </React.Fragment>
                  )}
                </div>
              </div>

              <div>
                <PhoneAndroidIcon />
                <div>
                  <InputMask
                    type="tel"
                    maskChar={null}
                    value={Prof.cel}
                    inputMode="numeric"
                    placeholder="Celular"
                    mask="(99) 99999-9999"
                    className={`${verifyEditionInput(Prof.cel, Backup.cel)[0]}`}
                    onChange={(e) =>
                      ProfCont.setProf({
                        prof: { ...Prof, cel: removeSpecials(e.target.value) },
                        backup: { ...Backup },
                      })
                    }
                  />
                  {verifyEditionInput(Prof.cel, Backup.cel)[1] && (
                    <React.Fragment>
                      <p className={`${verifyError(Prof.cel, "inf11")[0]}`}>
                        {verifyError(Prof.cel, "inf11")[1]}
                      </p>
                      <Tooltip title="Reverter alterações" placement="left">
                        <CancelIcon
                          className="active"
                          onClick={(e) => restartValue("cel", e)}
                        />
                      </Tooltip>
                    </React.Fragment>
                  )}
                </div>
              </div>

              <div>
                <PermContactCalendarIcon />
                <div>
                  <input
                    type="tel"
                    maxLength={18}
                    inputMode="numeric"
                    placeholder="CPF/CNPJ"
                    className={`${verifyEditionInput(Prof.cpfcnpj, Backup.cpfcnpj)[0]}`}
                    value={
                      Prof.cpfcnpj.length <= 11
                        ? cpf.format(Prof.cpfcnpj)
                        : cnpj.format(Prof.cpfcnpj)
                    }
                    onChange={(e) =>
                      ProfCont.setProf({
                        prof: { ...Prof, cpfcnpj: removeSpecials(e.target.value) },
                        backup: { ...Backup },
                      })
                    }
                  />
                  {verifyEditionInput(Prof.cpfcnpj, Backup.cpfcnpj)[1] && (
                    <React.Fragment>
                      <p className={`${verifyError(Prof.cpfcnpj, "inf11+")[0]}`}>
                        {verifyError(Prof.cpfcnpj, "inf11+")[1]}
                      </p>
                      <Tooltip title="Reverter alterações" placement="left">
                        <CancelIcon
                          className="active"
                          onClick={(e) => restartValue("cpfcnpj", e)}
                        />
                      </Tooltip>
                    </React.Fragment>
                  )}
                </div>
              </div>

              <div>
                <AlternateEmailIcon />
                <div>
                  <input
                    type="email"
                    inputMode="email"
                    value={Prof.email}
                    placeholder="Email"
                    className={`${verifyEditionInput(Prof.email, Backup.email)[0]}`}
                    onChange={(e) =>
                      ProfCont.setProf({
                        prof: { ...Prof, email: e.target.value },
                        backup: { ...Backup },
                      })
                    }
                  />
                  {verifyEditionInput(Prof.email, Backup.email)[1] && (
                    <React.Fragment>
                      <p className={`${verifyError(Prof.email, "email")[0]}`}>
                        {verifyError(Prof.email, "email")[1]}
                      </p>
                      <Tooltip title="Reverter alterações" placement="left">
                        <CancelIcon
                          className="active"
                          onClick={(e) => restartValue("email", e)}
                        />
                      </Tooltip>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {!modified && <span>Alterações não salvas</span>}
          <Tooltip className={`${modified ? "disabled" : ""}`} title="Confirmar">
            <div onClick={() => saveAll()}>
              <CheckRoundedIcon />
            </div>
          </Tooltip>
        </DialogActions>
      </DialogProfile>

      <CropperDialog image={image} />
    </React.Fragment>
  );
};

export default ProfileDialog;
