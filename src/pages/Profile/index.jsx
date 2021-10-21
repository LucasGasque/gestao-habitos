import HeaderProfile from "../../components/HeaderProfile";
import MenuBar from "../../components/MenuBar";
import CreateHabit from "../../components/CreateHabit";
import { Container, Box, Head } from "./style";
import ModalityContainer from "../../components/ModalityContainer";
import CardList from "../../components/CardsList";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits/Habits";
import DeleteModal from "../../components/DeleteModal";
import CreateActivity from "../../components/CreateActivity";
import AddNewCard from "../../components/AddNewCard";
import EditModal from '../../components/EditModal';


const Profile = () => {
  const { habits } = useContext(HabitsContext);


  return (
    <>
      <HeaderProfile title="Dashboard" />
      <Container>
        <Box>
          <ModalityContainer title="Hábitos">
            <CardList type="habit" pageType="user">
              <AddNewCard type="habit" />
            </CardList>
          </ModalityContainer>
          <ModalityContainer title="Objetivos">
            <CardList type="goal" pageType="user"></CardList>
          </ModalityContainer>
          <ModalityContainer title="Atividades">
            <CardList type="activity" pageType="user"></CardList>
          </ModalityContainer>
        </Box>
      </Container>
      <MenuBar />
      <CreateHabit />
      <CreateActivity />
    </>
  );
};

export default Profile;
