import { Container, ArrowButton, Box, Title, Bottom } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const ModalityContainer = ({ title, children }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Title>
        <p>{title}</p>
      </Title>
      <Box show={show}>{children}</Box>
      <Bottom>
        <ArrowButton onClick={() => setShow(!show)}>
          {!show ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </ArrowButton>
      </Bottom>
    </Container>
  );
};

export default ModalityContainer;
