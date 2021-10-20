import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  width: 238px;
  height: 117px;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContainerHeaderCard = styled.div`
  margin: 0 auto;
  width: 214px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerImage = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 100px;
  background-color: #969da8; ;
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
`;

export const ContainerDate = styled.div`
  margin-top: 10px;
  margin-left: 11px;
  display: flex;
  flex-direction: column;
  width: 117px;
  height: 41px;

  h3 {
    font-size: 14px;
    color: var(--white);
    margin-bottom: 3px;
  }

  p {
    font-size: 10px;
    color: var(--white);
  }
`;

export const CointainerProgress = styled.div`
  margin: 0 auto;
  width: 214px;
  height: 5px;
  background-color: var(--white);

  div {
    width: 20%;
    background-color: #61d891;
    height: 5px;
  }
`;
