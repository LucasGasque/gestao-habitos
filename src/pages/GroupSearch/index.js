import { Container, SearchBox } from "./style";
import MenuBar from '../../components/MenuBar';
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { GroupContext } from'../../providers/Group/Group';
import GroupCard from '../../components/GroupCard'
import {Redirect} from 'react-router-dom'
import { LoginContext } from "../../providers/Login/Login";

const GroupSearch = () => {

  const { authenticated } = useContext(LoginContext);
  const { groups } = useContext(GroupContext);
  const [ filteredGroups, setFilteredGroups ] = useState([...groups]);
  const showGroups = (input) => {
    const loweredInput = input.toLowerCase();
    setFilteredGroups(
      groups.filter(({ name }) => name.toLowerCase().includes(loweredInput))
    );
  };

  console.log(groups)

  if (!authenticated) return <Redirect to="/login" />;

  return (
    <>
      <Container>
        <SearchBox>
          <h1>Procurar Grupos</h1>
          <TextField
            label='Pesquisar'
            variant="outlined"
            size="small"
            color='secondary'
            onChange={(e)=>showGroups(e.target.value)}
          />
        </SearchBox>
        <ul>
          {filteredGroups.map((group,index)=> 
            <GroupCard 
              key={index}
              name={group.name}
              goals={group.goals}
              users={group.users_on_group}
              id={group.id}
            />
          )}
        </ul>
      </Container>
      <MenuBar/>
    </>
  );
};

export default GroupSearch;
