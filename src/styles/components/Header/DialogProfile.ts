import styled from "styled-components";
import { Dialog } from "@material-ui/core";

const DialogProfile = styled(Dialog)`
  .MuiPaper-root {
    background: #523c52;
    transition: all 0.3s;

    .MuiDialogTitle-root {
      .MuiTypography-root {
        color: var(--color-secundary);
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
          cursor: pointer;
          padding: 0.1rem;
          transition: all 0.2s;

          :hover {
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 2rem;
            transform: scale(1.2, 1.2);
          }
          :active {
            transform: scale(0.95, 0.95);
          }
        }
      }
    }

    .MuiDialogContent-root.profile-content {
      .MuiTypography-root {
        color: #9c909c;
        line-height: 20px;
        text-align: justify;

        svg {
          margin-right: 0.2rem;
          padding-top: 0.1rem;
          font-size: 1rem;
        }
      }

      .MuiDialogActions-root {
        .info-content {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .avatar-upload {
            img {
              width: 10rem;
              border-radius: 5rem;
            }

            .dv-content {
              height: 10rem;

              > div {
                display: none;
              }
            }

            label {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              position: relative;

              > span {
                text-align: center;
                color: var(--color-secundary);
                font-weight: 500;
                font-size: 0.8rem;
                cursor: pointer;
              }

              .hover-state {
                width: 10rem;
                height: 10rem;
                position: absolute;
                border-radius: 5rem;
                transition: all 0.4s;
                cursor: pointer;
                top: 0;

                :hover {
                  box-shadow: inset 0px 0px 25px rgba(0, 0, 0, 0.8);
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .MuiPaper-root {
      width: 100%;
      height: 100%;
      margin: auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

export default DialogProfile;
