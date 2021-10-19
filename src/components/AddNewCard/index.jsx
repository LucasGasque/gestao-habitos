import React, { useContext, useState } from "react";
import { ActivitiesContext } from "../../providers/Activities/Activities";
import { GoalsContext } from "../../providers/Goals/Goals";
import { HabitsContext } from "../../providers/Habits/Habits";

import CreateHabit from "../CreateHabit";
import { Container } from "./style";

function AddNewCard({ type }) {
  const { setNewHabitVisible } = useContext(HabitsContext);
  const { setNewGoalVisible } = useContext(GoalsContext);
  const { setNewActivityVisible } = useContext(ActivitiesContext);

  const visibilityFunctions = {
    habit: setNewHabitVisible,
    goal: setNewGoalVisible,
    activity: setNewActivityVisible,
  };

  return (
    <>
      <Container onClick={() => visibilityFunctions[type](true)}>
        <p>Add new {type}</p>
      </Container>
      <CreateHabit />
    </>
  );
}

export default AddNewCard;
