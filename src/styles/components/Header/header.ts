
import styled from "styled-components";

const Container = styled.div`
  height: 4.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  min-width: 320px;
  transition: all 0.3s;

  .header-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-box .info-session {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-right: 0.9rem;
    flex-direction: column;
    line-height: 23px;
    max-width: 15rem;
    transition: all 0.3s;
  }

  .header-box .info-session span:nth-child(1) {
    font-weight: 700;
    font-size: 1.3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .header-box .info-session span:nth-child(2) {
    color: #dad2d883;
  }

  .header-box .container-avatar .avatar {
    background: #383038;
    width: 50px;
    height: 50px;
  }

  .header-box .container-avatar .avatar img {
    width: 100%;
  }

  .container-avatar {
    position: relative;
  }

  .container-avatar svg {
    position: absolute;
    right: -2px;
    bottom: -2px;
    background: var(--color-secundary);
    color: #221e22ce;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    height: 3.9rem;

    .header-box .info-session {
      margin-right: 0.2rem;

      span:nth-child(1) {
        font-size: 1rem;
      }

      span:nth-child(2) {
        font-size: 0.75rem;
      }
    }
  }
`;

export default Container;
