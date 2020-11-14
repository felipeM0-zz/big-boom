import styled from "styled-components";
import { Dialog } from "@material-ui/core";

const DialogCropper = styled(Dialog)`
  .MuiPaper-root {
    background: #523c52;
    transition: all 0.3s;

    .MuiDialogTitle-root {
      h2 {
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

    .MuiDialogContent-root {
      overflow: hidden;

      .cropper-box {
        height: 70vh;
        width: 100%;

        .cropper-container {
          margin: auto;
        }
      }
    }

    .MuiDialogActions-root {
      button {
        background: var(--color-secundary);
        margin: 0.5rem 1rem;
        width: 100%;
        height: 2.5rem;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;

        span {
          font-weight: 500;
          color: var(--color-primary);
        }

        span:first-child {
          font-weight: 500;
          text-transform: none;
          color: var(--color-primary);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .MuiDialog-paper {
      width: 100%;
      height: 100%;
      margin: auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

export default DialogCropper;
