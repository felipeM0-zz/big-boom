import styled from "styled-components";
import { Dialog } from "@material-ui/core";

const DialogProfile = styled(Dialog)`
  .MuiPaper-root {
    background: #523c52;
    transition: all 0.3s;

    .MuiDialogTitle-root {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 8px 24px;

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
      ::-webkit-scrollbar {
        width: 11px;
      }

      ::-webkit-scrollbar-track {
        background: var(--color-secundary);
      }
      ::-webkit-scrollbar-thumb {
        background-color: #9c909c;
        border-radius: 1rem;
        border: 3px solid var(--color-secundary);
      }

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

      .info-content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .avatar-upload {
          position: relative;

          > svg {
            position: absolute;
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #f27474;
            font-size: 1.25rem;
            cursor: pointer;
            animation: 0.4s CloseOutImage forwards;

            &.active {
              animation: 0.4s CloseInImage forwards;
            }
          }

          > label {
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

            .dv-content {
              height: 10rem;

              img {
                width: 10rem;
                border-radius: 5rem;
              }

              > div {
                display: none;
              }
            }
          }
        }

        .inputs {
          padding: 1.5rem 0 0.5rem 0;
          width: 100%;
          max-width: 425px;

          > div {
            display: flex;
            justify-content: center;
            align-items: center;

            > svg {
              color: var(--color-secundary);
              margin-right: 0.5rem;
            }

            > div {
              margin-top: 1rem;
              position: relative;
              height: 55px;
              width: 100%;

              input {
                padding: 0.7rem 0;
                width: 100%;
                outline: none;
                border: none;
                border-bottom: 1px solid var(--color-secundary);
                border-radius: 0px;
                background-color: transparent;
                color: var(--color-secundary);
                font-size: 1.5rem;
                transition: all 0.1s;

                &.edited {
                  padding: 0.7rem 2rem 0.7rem 0;
                }

                :focus {
                  border-width: 2px;
                }
              }

              p {
                font-size: 0.6rem;
                text-align: right;
                color: #f27474;
                font-weight: bold;
                margin-top: 0.2rem;
                animation: 0.4s CloseIn forwards;
              }

              svg {
                position: absolute;
                top: 11px;
                left: 95%;
                font-size: 1.2rem;
                color: #f27474;
                cursor: pointer;
                animation: 0.4s CloseOut forwards;

                &.active {
                  animation: 0.4s CloseIn forwards;
                }
              }
            }
          }
        }
      }
    }

    .MuiDialogActions-root {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: 8px 16px;
      position: relative;
      height: 56px;

      span {
        color: rgba(255, 255, 255, 0.3);
        font-size: 0.7rem;
        position: absolute;
        animation: 1.3s spanFooterIn forwards;
        left: 16px;
      }

      div {
        width: 40px;
        height: 40px;
        display: flex;
        cursor: pointer;
        border-radius: 2rem;
        align-items: center;
        transition: all 0.1s;
        justify-content: center;
        background-color: #7fab66;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        position: absolute;
        right: 16px;

        svg {
          color: #fff;
        }

        :hover {
          transform: scale(1.06, 1.06);
        }
        :active {
          transform: scale(0.9, 0.9);
        }

        &.disabled {
          background-color: #bfbaba61;
          pointer-events: none;

          svg {
            color: #ffffff4d;
          }
        }
      }
    }
  }

  @keyframes spanFooterIn {
    from {
      filter: blur(3px);
    }
    to {
      filter: blur(0px);
    }
  }

  @keyframes CloseInImage {
    from {
      left: 50%;
      opacity: 0;
    }
    to {
      left: 112%;
      opacity: 1;
    }
  }

  @keyframes CloseOutImage {
    from {
      left: 112%;
      opacity: 1;
    }
    to {
      left: 50%;
      opacity: 0;
    }
  }

  @keyframes CloseIn {
    from {
      transform: translate(-20px, 0px);
      opacity: 0;
    }
    to {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  @keyframes CloseOut {
    from {
      left: 95%;
      opacity: 1;
    }
    to {
      left: 85%;
      opacity: 0;
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
    .MuiDialogContent-root.profile-content {
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export default DialogProfile;
