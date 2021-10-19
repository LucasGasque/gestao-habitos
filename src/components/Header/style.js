import styled from "styled-components";
export const Container = styled.div`
  background: var(--white);
  position: fixed;
  width: 100%;
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 6px 0px rgba(196, 196, 196, 0.65);

  h1 {
    padding-top: 3px;
    width: 120px;
    height: 22px;
    font-size: 17px;
    text-align: center;
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
    height: 66.19px;

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
