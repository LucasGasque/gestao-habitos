import HeaderProfile from "../../components/HeaderProfile";
import MenuBar from "../../components/MenuBar";
import CreateHabit from '../../components/CreateHabit'
import { Container, Box, Head } from "./style";
import ModalityContainer from '../../components/ModalityContainer';
import CardList from '../../components/CardsList';
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits/Habits";

const Profile = () => {

  const { habits } = useContext(HabitsContext)

  return (
    <>
    <HeaderProfile title='Dashboard'/>
    <Container>
      <Box>
        <ModalityContainer title='Hábitos'>
          <CardList
            type='habit'
            pageType='user'
          >
           
          </CardList>
        </ModalityContainer>
        <ModalityContainer title='Objetivos'>
          <CardList
            type='goal'
            pageType='user'
          >
           
          </CardList>
        </ModalityContainer>
        <ModalityContainer title='Atividades'>
          <CardList
            type='activity'
            pageType='user'
          >
           
          </CardList>
        </ModalityContainer>
      </Box>
    </Container>
    <MenuBar/>
    <CreateHabit/>
    </>
  );
};

export default Profile;
