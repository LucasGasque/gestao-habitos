import styled from "styled-components";
export const Container = styled.div`
  background: var(--white);
  margin-top: 10px;
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

<<<<<<< HEAD
export const ButtonPurple = styled.button`
  background: var(--purple);
  border: none;
  width: 50px;
  color: var(--white);
  border-radius: 5px;
  margin-right: 10px;
`;

export const ButtonWhite = styled.button`
  background: var(--white);
  border: 2px solid var(--purple);
  width: 64px;
  color: var(--purple);
  border-radius: 5px;
`;
=======
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
>>>>>>> develop
