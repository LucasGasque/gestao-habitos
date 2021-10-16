import { Container } from "./style";

const InfoCard = ({title, img, text, color}) => {
    return(
        <Container
            color={color}>
            <h2>{title}</h2>
            <img src={img} alt={title}/>
            <p>{text}</p>
        </Container>
    )
}

export default InfoCard