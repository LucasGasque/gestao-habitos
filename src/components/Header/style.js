import styled from "styled-components";
export const Container = styled.div`
  background: var(--white);
  width: 100%;
  height: 43px;
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    height: 66.19px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  h1 {
    padding-top: 3px;
    width: 120px;
    height: 22px;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    font-family: "Fredoka One";
  }

  div {
    max-width: 124.5;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .groundPurple {
      background-color: var(--purple);
      color: var(--white);
      margin-right: 10px;
      width: 50px;
      height: 20px;
      font-size: 12px;
      text-transform: capitalize;
      padding: 0;
    }

    .groundWhite {
      width: 64px;
      height: 20px;
      font-size: 12px;
      text-transform: capitalize;
      padding: 0;
    }
  }
  @media (min-width: 768px) {
    max-width: 1170px;
    padding: 0;
    h1 {
      width: 239px;
      height: 35.73px;
      font-size: 36px;
      padding: 0;
    }

    div {
      max-width: 255px;
      height: 37.47px;

      .groundPurple {
        width: 85px;
        height: 37.27px;
        font-size: 18px;
      }

      .groundWhite {
        width: 113px;
        height: 37.27px;
        font-size: 18px;
      }
    }
  }
`;
