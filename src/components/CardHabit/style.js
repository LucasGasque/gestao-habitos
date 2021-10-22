import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  width: 100%;
  min-height: 117px;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
`;

export const ContainerHeaderCard = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const ContainerImage = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  img {
    width: 40px;
  }
`;

export const ContainerButtons = styled.div`
  width: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #969da8;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  > :first-child {
    cursor: pointer;
  }

  :hover {
    background-color: var(--purple);
  }

  :active {
    transform: scale(95%);
  }
`;

export const ContainerDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px 0;
  min-height: 40px;
  text-align: left;
  margin-left: 5px;

  h3 {
    font-size: 18px;
    color: var(--white);
    width: 80%;
    word-break: break-all;
  }

  p {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
    text-align: left;
    line-height: 10px;
    font-weight: normal;
    width: 80%;
    word-break: break-all;
    margin-top: 5px;
  }
`;

export const CointainerProgress = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 5px;
  background-color: var(--white);

  div {
    background-color: #61d891;
    height: 5px;
  }
`;
