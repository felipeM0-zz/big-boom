import styled from "styled-components";

const TabMobileStyle = styled.div`
  position: fixed;
  background: #383038;
  width: 100%;
  bottom: 0;
  z-index: 5;

  .box-content {
    height: 3.3rem;
    display: flex;

    > a {
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

        &.active {
          border-bottom: 3px solid var(--color-secundary);
          padding-top: 3px;
        }

        span {
          font-size: 0.7rem;
        }

        :hover {
          background: #221e2254;
        }
      }
    }

    > button {
      height: 100%;
      width: 3.2rem;
      background: transparent;
      border: none;
      outline: none;
      color: var(--color-secundary);
      cursor: pointer;
      animation: 0.6s FadeIn forwards;

      &.active {
        animation: 0.6s FadeOut forwards;
      }
    }
  }

  @keyframes FadeIn {
    from {
      transform: translate(100px, 0px);
      opacity: 0;
    }
    to {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  @keyframes FadeOut {
    from {
      transform: translate(0px, 0px);
      opacity: 1;
    }
    to {
      transform: translate(100px, 0px);
      opacity: 0;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default TabMobileStyle;
