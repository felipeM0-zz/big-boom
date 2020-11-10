import styled from "styled-components";

const SideBarStyles = styled.div`
  height: 100%;
  width: 4.1rem;
  background: #383038;
  transition: all 0.4s;
  border-bottom-right-radius: 2rem;

  :hover {
    width: 13rem;
  }

  .side-box {
    .options-box {
      a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        position: relative;

        > p {
          position: absolute;
          bottom: 0.5rem;
          width: 100%;
          text-align: center;
          font-size: 0.6rem;
          color: #dad2d8;
          z-index: 1;
          opacity: 0;
          transition: all 0.4s;
        }

        button {
          width: 100%;
          border: none;
          outline: none;
          height: 3.5rem;
          cursor: pointer;
          position: relative;
          transition: all 0.3s;
          background: #383038;
          color: var(--color-secundary);

          span {
            transform: translate(-150px, 0px);
            transition: all 0.3s;
            position: absolute;
            top: 1.2rem;
            right: 1.5rem;
            left: 0;
          }

          svg {
            position: absolute;
            top: 1rem;
            right: 1.2rem;
          }

          &.active {
            border-right: 2px solid var(--color-secundary);
            padding-left: 2px;
          }
        }

        :hover {
          button {
            background: #221e2254;
          }
        }
      }

      a:last-child {
        button {
          border-bottom-right-radius: 2rem;

          &.active {
            border-bottom: 2px solid var(--color-secundary);
            padding-top: 2px;
          }
        }
      }
    }

    :hover {
      .options-box {
        a {
          button {
            span {
              transform: translate(0px, 0px);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default SideBarStyles;
