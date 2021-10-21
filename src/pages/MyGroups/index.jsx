import {Redirect} from 'react-router-dom'
import { LoginContext } from "../../providers/Login/Login";
import { Container, SearchBox } from "./style";
import MenuBar from "../../components/MenuBar";
import { useContext } from "react";
import { GroupContext } from "../../providers/Group/Group";
import GroupCard from "../../components/GroupCard";

const MyGroups = () => {
  const { subscriptions } = useContext(GroupContext);
  const { authenticated } = useContext(LoginContext);

   if (!authenticated) return <Redirect to="/login" />;

  return (
    <>
      <Container>
        <SearchBox>
          <h1>Meus Grupos</h1>
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
    </>
  );
};

export default MyGroups;
