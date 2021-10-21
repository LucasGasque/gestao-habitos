import React, { useEffect, useState, useContext } from "react";
import { CardContainer, Container, FilterContainer } from "./style";
import { Button } from "@material-ui/core";
import { HabitsContext } from "../../providers/Habits/Habits";
import { GroupContext } from "../../providers/Group/Group";
import { CategoriesContext } from "../../providers/Categories/Categories";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ActivityCard from "../ActivityCard/";

const CardsList = ({ type, pageType, groupData, children }) => {
  const [loadedContent, setLoadedContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);

  const { categories } = useContext(CategoriesContext);

  const [finished, setFinished] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState(null);

  const { habits } = useContext(HabitsContext);
  const { subscriptions } = useContext(GroupContext);

  useEffect(() => {
    if (pageType === "user" && type === "habit") {
      setLoadedContent(habits);
      setFilteredContent(habits.filter((habit) => habit.achieved === false));
    }
    if (pageType === "user" && type === "goal") {
      let goals = [];
      subscriptions.forEach((group) => {
        goals = [...goals, ...group.goals];
      });

      setLoadedContent(goals);
      setFilteredContent(goals.filter((goal) => goal.achieved === false));
    }
    if (pageType === "user" && type === "activity") {
      let activities = [];
      subscriptions.forEach((group) => {
        activities = [...activities, ...group.activities];
      });

      setFilteredContent(activities);
    }
    if (pageType === "group" && type === "goal") {
      setLoadedContent(groupData?.goals);
      setFilteredContent(
        groupData?.goals.filter((goal) => goal.achieved === false)
      );
    }
    if (pageType === "group" && type === "activity") {
      setFilteredContent(groupData?.activities);
    }
  }, [habits, subscriptions, groupData]);

  useEffect(() => {
    setFilteredContent(
      loadedContent
        .filter((content) => content.achieved === finished)
        .filter((content) =>
          categoryFilter === null
            ? content
            : content.category === categoryFilter
        )
    );
  }, [finished, categoryFilter]);

  const handleFinished = () => {
    setFinished(!finished);
  };

  return (
    <Container>
      {type === "activity" ? (
        "Calendar"
      ) : (
        <FilterContainer type={type}>
          {finished ? (
            <Button
              onClick={handleFinished}
              size="small"
              variant="outlined"
              color="primary"
            >
              Em andamento
            </Button>
          ) : (
            <Button
              onClick={handleFinished}
              color="primary"
              size="small"
              variant="contained"
            >
              Finalizados
            </Button>
          )}
          {type === "habit" ? (
            <Autocomplete
              value={categoryFilter}
              onChange={(event, newValue) => {
                setCategoryFilter(newValue);
              }}
              selectOnFocus
              blurOnSelect
              id="controllable-states-demo"
              options={categories}
              size="small"
              sx={{ width: 115 }}
              renderInput={(params) => <TextField {...params} label="Filtro" />}
            />
          ) : (
            ""
          )}
        </FilterContainer>
      )}
      <CardContainer>
        {filteredContent?.map((content) => (
          <div></div>
        ))}
        {type === "activity" &&
          filteredContent?.map((content) => (
            <ActivityCard type={type} content={content} key={content.id} />
          ))}
        {children}
      </CardContainer>
    </Container>
  );
};

export default CardsList;
