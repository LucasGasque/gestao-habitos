import HeaderProfile from "../../components/HeaderProfile";
import MenuBar from "../../components/MenuBar";
import CreateHabit from "../../components/CreateHabit";
import { Container, Box } from "./style";
import ModalityContainer from "../../components/ModalityContainer";
import CardList from "../../components/CardsList";
import { useContext } from "react";
import { LoginContext } from "../../providers/Login/Login";
import AddNewCard from "../../components/AddNewCard";
import {Redirect} from 'react-router-dom';

const Profile = () => {
  const { authenticated } = useContext(LoginContext);

  if (!authenticated) return <Redirect to="/login" />;
  
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
    </>
  );
};

export default Profile;
