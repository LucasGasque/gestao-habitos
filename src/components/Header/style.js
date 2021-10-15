import styled from "styled-components";
import Button from "@material-ui/core/Button";
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

// export const CustomButtonPurple = styled(Button)({
//   borderRadius: `5px`,
//   background: `#6C63FF`,
//   color: `#FCFCFC`,
//   fontSize: 30,
// });

// export const CustomButtonWhite = styled(Button)({
//   borderRadius: `5px`,
//   background: `#FCFCFC`,
//   border: `1px solid #6C63FF`,
//   color: `#6C63FF`,
// });
