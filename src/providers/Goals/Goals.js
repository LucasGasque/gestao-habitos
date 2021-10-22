import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoginContext } from "../Login/Login";
import { GroupContext } from "../Group/Group";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const { getSubscriptions } = useContext(GroupContext);

  const [goal, setGoal] = useState();
  const [newGoalVisible, setNewGoalVisible] = useState(false);

  const getGoal = (id) => {
    api
      .get(`/goals/${id}/`)
      .then((response) => setGoal(response))
      .catch((err) => console.log(err));
  };

  const createGoal = async ({ title, difficulty }, group) => {
    const data = { title, difficulty, how_much_achieved: 0, group };
    await api
      .post("/goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Objetivo criado com sucesso!");
        setNewGoalVisible(false);
      })
      .catch((_) => console.log(_));
    getSubscriptions();
  };

  const updateGoal = async (id, data) => {
    const titleObj = { title: data.newTitle };
    await api
      .patch(`/goals/${id}/`, titleObj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Objetivo atualizado com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
    getSubscriptions();
  };

  const updateGoalProgress = async (id, data) => {
    await api
      .patch(`/goals/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((_) => toast.error("Algo deu errado."));
    getSubscriptions();
  };

  const deleteGoal = async (id) => {
    await api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Objetivo deletado com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
    getSubscriptions();
  };

  return (
    <GoalsContext.Provider
      value={{
        deleteGoal,
        updateGoal,
        createGoal,
        getGoal,
        newGoalVisible,
        setNewGoalVisible,
        goal,
        updateGoalProgress,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
