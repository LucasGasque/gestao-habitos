import { Container, Redes } from "./style";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DevInfo = ({ gitHub, linkedin, img, name, animation }) => {
  useEffect(() => Aos.init({ duration: 1300 }), []);
  return (
    <Container data-aos={animation}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <Redes>
        <a href={gitHub} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare color="#6e5494" size="1.4375em" />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#0E76A8" size="1.4375em" />
        </a>
      </Redes>
    </Container>
  );
};

export default DevInfo;
