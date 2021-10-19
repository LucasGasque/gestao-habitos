import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoginContext } from "../Login/Login";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const [goal, setGoal] = useState();

  const getGoal = (id) => {
    api
      .get(`/goals/${id}/`)
      .then((response) => setGoal(response))
      .catch((err) => console.log(err));
  };

  const createGoal = (data) => {
    api
      .post("/goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Objetivo criado com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  const updateGoal = (id, data) => {
    api
      .patch(`/goals/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Objetivo atualizado com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  const deleteGoal = (id) => {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Objetivo deletado com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  return (
    <GoalsContext.Provider
      value={{
        deleteGoal,
        updateGoal,
        createGoal,
        getGoal,
        goal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
