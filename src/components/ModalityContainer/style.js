import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  width: 254px;
  border-radius: 5px;
  border: 1px solid var(--black);

  p {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    line-height: 27px;
  }
  @media (min-width: 768px) {
    width: ${(props) => (props.pageType === "Group" ? "500px" : "254px")};
    max-width: 35vw;
  }
  @media (min-width: 1040px) {
    max-width: 30vw;
  }
`;

export const Title = styled.div`
  background-color: var(--yellow);
  height: 27px;
  border-bottom: 1px solid var(--black);
  border-radius: 5px 5px 0 0;
`;

export const ArrowButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

export const Box = styled.section`
  height: ${(props) => (props.show ? "242px" : "0")};
  transition: 0.5s;
  overflow-y: auto;

  @media (min-width: 1050px) {
    height: 75vh;
  }
`;

export const Bottom = styled.div`
  height: 21px;
  background-color: var(--white);
  border-top: 1px solid var(--black);
  border-radius: 0 0 5px 5px;

  @media (min-width: 1050px) {
    display: none;
  }
`;
