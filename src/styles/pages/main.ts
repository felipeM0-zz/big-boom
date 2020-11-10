import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  .main-content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main-general {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    .main-general {
      margin-bottom: 3.3rem;
    }
  }
`;
