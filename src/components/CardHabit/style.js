import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 0 auto;
  border-radius: 5px;
  width: 238px;
  height: 117px;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
`;

export const ContainerHeaderCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerButtons = styled.div`
  width: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: #969da8;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  margin-right: 3px;
`;
