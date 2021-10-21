import { Container, ArrowButton, Box, Title, Bottom } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ModalityContainer = ({ title, pageType = null, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => Aos.init({ duration: 800, easing: "ease-in" }), []);

  return (
    <Container
      data-aos-anchor-placement="top-bottom"
      data-aos="fade"
      pageType={pageType}
    >
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
