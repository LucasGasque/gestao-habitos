import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 16px;

  img {
    display: none;
  }

  h1 {
    color: var(--purple);
    font-size: 22px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    width: 288px;
    height: 320px;
    border-radius: 5px;
    background-color: var(--white);
    border: 3px solid #f5f5f5;
    box-sizing: border-box;
  }

  p {
    font-size: 12px;
    color: var(--grey);

    button {
      border: none;
      background-color: transparent;
      color: var(--purple);
      font-weight: bold;
      margin-left: 3px;
    }

    button:hover {
      color: var(--darkPurple);
    }

    button:active {
      transform: scale(97%);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 70px;
    max-width: 1170px;
    margin: 0 auto;

    form {
      width: 370px;
      height: 334px;
    }

    img {
      display: block;
      width: 500px;
      height: 360px;
    }
  }
`;

export const Container = styled.section``;
