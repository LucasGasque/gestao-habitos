import styled from "styled-components";
import { Button } from "@material-ui/core";
export const Container = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  div {
    max-width: 124.5;
    height: 20px;
    display: flex;
    flex-direction: row;
  }
`;

export const CustomButtonPurple = styled(Button)`
  border-radius: 5px;
  background-color:#6C63FF;
  color: #FCFCFC;
`

export const CustomButtonWhite = styled(Button)`
  border-radius: 5px;
  background-color: #FCFCFC;
  border: 1px solid #6C63FF;
  color: #6C63FF;
`
