import { Container, Redes } from "./style";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const DevInfo = ({ gitHub, linkedin, img, name }) => {
  return (
    <Container>
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
