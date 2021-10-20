import { createContext, useContext, useState } from "react";
import { HabitsContext } from "../../providers/Habits/Habits";
import { GoalsContext } from "../../providers/Goals/Goals";
import { ActivitiesContext } from "../../providers/Activities/Activities";

export const DeleteModalContext = createContext();

export const DeleteModalProvider = ({ children }) => {
  const { deleteHabit } = useContext(HabitsContext);
  const { deleteGoal } = useContext(GoalsContext);
  const { deleteActivity } = useContext(ActivitiesContext);

  const [visible, setVisible] = useState(true);

  const ModalHabit = {
    title: "Deletar hábito?",
    del: deleteHabit,
  };

  const ModalGoal = {
    title: "Deletar objetivo?",
    del: deleteGoal,
  };

  const ModalActivity = {
    title: "Deletar atividade?",
    del: deleteActivity,
  };

  const defineTitle = (type) => {
    if (type === "goal") return ModalGoal.title;
    if (type === "habit") return ModalHabit.title;
    if (type === "activity") return ModalActivity.title;
  };

  const defineDelete = (type, id) => {
    if (type === "goal") ModalGoal.del(id);
    if (type === "habit") ModalHabit.del(id);
    if (type === "activity") ModalActivity.del(id);
    return setVisible(false);
  };

  return (
    <DeleteModalContext.Provider
      value={{ defineDelete, defineTitle, visible, setVisible }}
    >
      {children}
    </DeleteModalContext.Provider>
  );
};
