import React, { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities/Activities";
import { GoalsContext } from "../../providers/Goals/Goals";
import { HabitsContext } from "../../providers/Habits/Habits";

import CreateHabit from "../CreateHabit";
import CreateGoal from "../CreateGoal";
import CreateActivity from "../CreateActivity";
import { Container } from "./style";

function AddNewCard({ type, id }) {
  const { setNewHabitVisible } = useContext(HabitsContext);
  const { setNewGoalVisible } = useContext(GoalsContext);
  const { setNewActivityVisible } = useContext(ActivitiesContext);

  const visibilityFunctions = {
    habit: setNewHabitVisible,
    goal: setNewGoalVisible,
    activity: setNewActivityVisible,
  };

  const translatedTypeText = {
    habit: "Adicionar novo hábito",
    goal: "Adicionar novo objetivo",
    activity: "Adicionar nova atividade",
  };

  return (
    <>
      <Container onClick={() => visibilityFunctions[type](true)}>
        <p>{translatedTypeText[type]}</p>
      </Container>
      {type === "goal" ? (
        <CreateGoal group={id} />
      ) : type === "habit" ? (
        <CreateHabit />
      ) : (
        <CreateActivity group={id} />
      )}
    </>
  );
}

export default AddNewCard;
