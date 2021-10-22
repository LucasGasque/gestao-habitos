import { Container, SearchBox } from "./style";
import MenuBar from "../../components/MenuBar";
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../../providers/Login/Login";
import { GroupContext } from "../../providers/Group/Group";
import GroupCard from "../../components/GroupCard";
import { useEffect } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { CircularProgress } from "@mui/material";

const GroupSearch = () => {
  const { authenticated } = useContext(LoginContext);
  const { groups, loadingGroups, getNextPage, hasNextPage } =
    useContext(GroupContext);
  const [filteredGroups, setFilteredGroups] = useState([...groups]);
  const showGroups = (input = "") => {
    const loweredInput = input.toLowerCase();
    setFilteredGroups(
      groups?.filter(({ name }) => name.toLowerCase().includes(loweredInput))
    );
  };

  useEffect(() => {
    showGroups();
  }, [groups]);

  const [sentryRef] = useInfiniteScroll({
    loadingGroups,
    hasNextPage,
    onLoadMore: getNextPage,
    rootMargin: "0px 0px 200px 0px",
    delayInMs: 1000,
  });

  if (!authenticated) return <Redirect to="/login" />;

  return (
    <>
      <Container>
        <SearchBox>
          <h1>Procurar Grupos</h1>
          <TextField
            label="Pesquisar"
            variant="outlined"
            size="small"
            color="secondary"
            onChange={(e) => showGroups(e.target.value)}
          />
        </SearchBox>
        <ul>
          {filteredGroups.map((group, index) => (
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
        {(loadingGroups || hasNextPage) && (
          <div ref={sentryRef}>
            <CircularProgress />
          </div>
        )}
      </Container>
      <MenuBar />
    </>
  );
};

export default GroupSearch;
