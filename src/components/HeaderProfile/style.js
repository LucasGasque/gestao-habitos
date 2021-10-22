import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 68px;
  background-color: var(--purple);
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    display: block;
    margin: 0;
    padding: 0;
  }

  h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 130px;
    font-size: 22px;
    color: var(--black);
  }

  h2 {
    display: none;
  }

  button {
    background-color: transparent;
    border: none;
    color: white;
    width: 20px;
    margin-right: 20px;
    transition: 0.1s;
  }

  button:hover {
    color: var(--black);
  }

  button:active {
    transform: rotate(20deg);
  }

  @media (min-width: 768px) {
    justify-content: center;
    padding-left: 268px;
    background-color: transparent;
    border-bottom: 4px solid #f5f5f5;
    height: 75px;

    img,
    h1,
    button {
      display: none;
    }

    h2 {
      display: block;
      color: var(--black);
    }
  }
`;
