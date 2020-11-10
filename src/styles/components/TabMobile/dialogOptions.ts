import styled from "styled-components";
import { Dialog } from "@material-ui/core";

const DialogOptions = styled(Dialog)`
  .MuiPaper-root {
    background: #523c52;
    transition: all 0.3s;

    .MuiDialogTitle-root {
      h2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-secundary);
      }
      svg {
        margin: 0 0 0 2rem;
        padding: 0.1rem;
        cursor: pointer;
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

    .MuiDialogContent-root {
      .not-visibles {
        display: flex;
        flex-direction: column;
        margin: 0 2rem;
        margin: auto;
        width: 80%;

        a {
          position: relative;
          display: flex;
          flex: 1;
          text-decoration: none;

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border: none;
            background: transparent;
            width: 100%;
            cursor: pointer;
            outline: none;
            color: var(--color-secundary);
            justify-content: space-evenly;
            padding: 0.7rem 0;
            margin: 0.5rem 0;
            border: 1px solid var(--color-secundary);
            border-radius: 0.3rem;
            transition: all 0.5s;

            span {
              font-size: 1rem;
            }

            :hover {
              background: #221e2254;
            }
          }
        }
      }

      .show-content {
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        margin: 0.5rem 0;
        padding: 1rem 0;

        > p {
          text-align: left;
          color: var(--color-secundary);
        }

        .show-options {
          padding: 1rem 0 0 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;

          div {
            border: 1px solid #dad2d883;
            padding: 0.2rem 0.5rem;
            border-radius: 2rem;
            color: #dad2d883;
            margin: 0.3rem 0.2rem;
            cursor: pointer;

            span {
              font-size: 0.7rem;
            }

            &.active {
              background-color: var(--color-secundary);
              color: #523c52;
              font-weight: bold;
            }
          }
        }
      }
    }

    .MuiDialogActions-root {
      button {
        width: 80%;
        height: 2.3rem;
        border: none;
        outline: none;
        border-radius: 0.3rem;
        background: var(--color-secundary);
        margin: 0 3rem 1rem;
        transition: all 0.2s;
        cursor: pointer;

        span {
          font-weight: 800;
          font-size: 0.8rem;
          color: #523c52;
        }

        :disabled {
          background: #ffffff10;
          cursor: no-drop;

          span {
            color: #ffffff15;
            font-weight: 400;
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

export default DialogOptions;
