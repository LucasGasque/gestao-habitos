import styled, { keyframes } from "styled-components";
import waves from "../../img/svgs/waveVector.svg";

export const Container = styled.div`
  padding-top: 43px;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  h4 {
    margin: 5px 0;
    text-decoration: underline;
    display: none;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    padding: 0 10px;
  }

  @media (min-width: 768px) {
    padding-top: 66px;

    h4 {
      display: block;
    }
  }
`;

export const Img = styled.img`
  width: 198px;
  height: 159px;
  background-color: white;

  :first-child {
    width: 277px;
    height: 208px;
  }

  @media (min-width: 768px) {
    width: 370px;
    height: 296px;

    :first-child {
      width: 450px;
      height: 377px;
    }
  }
`;

export const Box = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 424px;
    width: 100%;
  }

  p {
    text-align: center;
  }

  :nth-child(2) {
    background-color: var(--green);

    img {
      background-color: var(--green);
    }
  }

  :nth-child(4) {
    background-color: var(--purple);
    color: var(--white);
  }

  :nth-child(6) {
    background-color: var(--blue);
  }

  :nth-child(8) {
    background-color: var(--yellow);
  }
  :last-child {
    position: relative;
  }
  :last-child::before {
    content: "";
    top: -2%;
    left: 0;
    width: 100%;
    position: absolute;
    min-height: 60px;
    background: url(${waves});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) {
    :last-child::before {
      top: -7%;
      min-height: 110px;
    }
    span {
      max-width: 1170px;
      flex-direction: row;
    }

    :last-child span {
      flex-direction: column;
    }

    p {
      text-align: start;
      padding: 0;
    }

    :nth-child(2) span:nth-child(1) {
      flex-direction: row-reverse;
    }

    :nth-child(6) span:nth-child(1) {
      flex-direction: row-reverse;
    }

    h2 {
      display: none;
    }

    h1 {
      max-width: 400px;
    }

    p {
      max-width: 350px;
    }
  }
`;

export const Article = styled.article`
  h2 {
    display: none;
  }

  @media (min-width: 768px) {
    h2 {
      display: block;
      margin: 0 0 20px 0;
    }
  }
`;

export const Ondas = styled.div`
  width: 100%;
  height: 66px;

  :nth-child(3) {
    background-color: var(--green);
  }

  :nth-child(5) {
    background-color: var(--purple);
  }

  :nth-child(7) {
    background-color: var(--blue);
  }
`;

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 424px;
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
  }

  h4 {
    margin: 5px 0;
    text-decoration: underline;
  }

  h1 {
    font-size: 28px;
    font-weight: bold;
  }

  strong {
    color: var(--purple);
  }

  p {
    font-size: 16px;
    padding: 0;
    margin: 5px 0;
  }

  img {
    width: 277px;
    height: 208px;
  }

  @media (min-width: 768px) {
    span {
      max-width: 1170px;
      flex-direction: row;
    }

    h1 {
      max-width: 400px;
    }

    p {
      max-width: 350px;
      margin: 20px 0;
    }

    img {
      width: 585px;
      height: 490px;
    }
  }
`;

export const LottieContainer = styled.div`
  width: 250px;
  height: 200px;

  @media (min-width: 768px) {
    width: 430px;
    height: 330px;
  }
`;
