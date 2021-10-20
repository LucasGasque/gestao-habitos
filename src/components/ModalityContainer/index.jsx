import { Container, ArrowButton, Box, Title, Bottom } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const ModalityContainer = ({ title, pageType = null, children }) => {
  const [show, setShow] = useState(false);

  return (
    <Container pageType={pageType}>
      <Title>
        <p>{title}</p>
      </Title>
      <Box pageType={pageType} show={show}>
        {children}
      </Box>
      <Bottom>
        <ArrowButton onClick={() => setShow(!show)}>
          {!show ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </ArrowButton>
      </Bottom>
    </Container>
  );
};

export default ModalityContainer;
