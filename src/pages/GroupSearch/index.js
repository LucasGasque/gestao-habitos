import { Container, SearchBox } from "./style";
import MenuBar from '../../components/MenuBar';
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { GroupContext } from'../../providers/Group/Group';

const GroupSearch = () => {

  const { groups } = useContext(GroupContext);
  const [ filteredGroups, setFilteredGroups ] = useState([...groups]);
  const showGroups = (input) => {
    const loweredInput = input.toLowerCase();
    setFilteredGroups(
      groups.filter(({ name }) => name.toLowerCase().includes(loweredInput))
    );
  };

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
          {filteredGroups.map((group,index)=> <li>{group.name}</li>)}
        </ul>
      </Container>
      <MenuBar/>
    </>
  );
};

export default GroupSearch;
