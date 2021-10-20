import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;
  background-color: var(--purple);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    color: var(--white);
    font-weight: bold;
    font-family: "Roboto";
    font-size: 14px;
  }
`;
