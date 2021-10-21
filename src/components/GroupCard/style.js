import styled from "styled-components";

export const Container = styled.div`
  width: 288px;
  height: 117px;
  background-color: var(--grey);
  margin: 10px;
  color: var(--white);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px 5px;
  box-shadow: 2px 2px 2px 2px var(--black);
  cursor: pointer;

  :hover {
    transform: scale(105%);
  }

  :active {
    transform: scale(100%);
  }

  span {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 768px) {
    width: 412px;
    padding-left: 100px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  img {
    width: 50px;
    margin: 0 10px;
    height: 50px;
    border-radius: 50%;
    padding: 2px;
    background-color: var(--white);
  }

  @media (min-width: 768px) {
    h2 {
      margin-left: 15px;
    }

    img {
      width: 75px;
      height: 75px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  p {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 768px) {
    div {
      display: flex;
    }

    p {
      line-height: 32px;
      margin: 0 1px;
    }
  }
`;
