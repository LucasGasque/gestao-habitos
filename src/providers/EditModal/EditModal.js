import { createContext, useContext, useState } from "react";
import { HabitsContext } from "../../providers/Habits/Habits";
import { GoalsContext } from "../../providers/Goals/Goals";
import { ActivitiesContext } from "../../providers/Activities/Activities";
import { schema as schemaActivity } from "../../validations/EditActivityScheme";
import { schema as schemaHabit } from "../../validations/EditHabitSchema";
import { schema as schemaGoal } from "../../validations/EditGoalSchema";

export const EditModalContext = createContext();

export const EditModalProvider = ({ children }) => {
  const { updateHabit } = useContext(HabitsContext);
  const { updateGoal } = useContext(GoalsContext);
  const { updateActivities } = useContext(ActivitiesContext);

  const [editVisible, setEditVisible] = useState(true);

  const ModalHabit = {
    schema: schemaHabit,
    title: "Editar hábito?",
    edit: updateHabit,
  };

  const ModalGoal = {
    schema: schemaGoal,
    title: "Editar objetivo?",
    edit: updateGoal,
  };

  const ModalActivity = {
    schema: schemaActivity,
    title: "Editar atividade?",
    edit: updateActivities,
  };

  const defineSchema = (type) => {
    if (type === "goal") return ModalGoal.schema;
    if (type === "habit") return ModalHabit.schema;
    if (type === "activity") return ModalActivity.schema;
  };

  const defineTitle = (type) => {
    if (type === "goal") return ModalGoal.title;
    if (type === "habit") return ModalHabit.title;
    if (type === "activity") return ModalActivity.title;
  };

  const defineEdit = (type, id, data) => {
    if (type === "goal") ModalGoal.edit(id, data);
    if (type === "habit") ModalHabit.edit(id, data);
    if (type === "activity") ModalActivity.edit(id, data);
    return setEditVisible(false);
  };

  return (
    <EditModalContext.Provider
      value={{
        defineEdit,
        defineTitle,
        defineSchema,
        editVisible,
        setEditVisible,
      }}
    >
      {children}
    </EditModalContext.Provider>
  );
};
