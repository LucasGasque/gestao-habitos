import HeaderProfile from "../../components/HeaderProfile";
import MenuBar from "../../components/MenuBar";
import { Container, Box } from "./style";
import ModalityContainer from '../../components/ModalityContainer'

const Profile = () => {
  return (
    <>
    <HeaderProfile/>
    <Container>
      <Box>
        <ModalityContainer title='Hábitos'>

        </ModalityContainer>
        <ModalityContainer title='Objetivos'>

        </ModalityContainer>
        <ModalityContainer title='Atividades'>

        </ModalityContainer>
      </Box>
    </Container>
    <MenuBar/>
    </>
  );
};

export default Profile;
