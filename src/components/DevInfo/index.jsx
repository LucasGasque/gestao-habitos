import { Container } from "./style";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const DevInfo = ( {gitHub, linkedin, img, name}) => {
    return(
        <Container>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <div>
                <a href={gitHub}>
                    <FaGithubSquare
                        color='#6e5494'
                        size='1.4375em'
                    />
                </a>    
                <a href={linkedin}>
                   <FaLinkedin
                    color='#0E76A8'
                    size='1.4375em'
                   />
                </a>
            </div>
        </Container>
    )
}

export default DevInfo;
