import {Redirect} from 'react-router-dom';
import { LoginContext } from "../../providers/Login/Login";
import { Container, SearchBox } from "./style";
import MenuBar from "../../components/MenuBar";
import { useContext } from "react";
import { GroupContext } from "../../providers/Group/Group";
import GroupCard from "../../components/GroupCard";
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateGroup from '../../components/CreateGroup'; 

const MyGroups = () => {
  const { subscriptions, setNewGroupVisible } = useContext(GroupContext);
  const { authenticated } = useContext(LoginContext);

   if (!authenticated) return <Redirect to="/login" />;

  return (
    <>
      <Container>
        <SearchBox>
          <h1>Meus Grupos</h1>
          <Button
            onClick={()=> setNewGroupVisible(true)}
            variant='contained'
            color='secondary'
            endIcon={<AddBoxIcon/>}
          >Criar Novo Grupo</Button>
        </SearchBox>
        <ul>
          {subscriptions.map((group, index) => (
            <GroupCard
              key={index}
              name={group.name}
              goals={group.goals}
              users={group.users_on_group}
              id={group.id}
              category={group.category}
            />
          ))}
        </ul>
      </Container>
      <MenuBar />
      <CreateGroup/>
    </>
  );
};

export default MyGroups;
