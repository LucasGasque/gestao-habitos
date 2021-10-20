import { createContext, useState } from "react";
import { useContext } from "react";
import { toast } from "react";
import api from "../../services/api";
import { LoginContext } from "../Login/Login";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [newActivityVisible, setNewActivityVisible] = useState(false);

  const { token } = useContext(LoginContext);

  const createActivities = (data) => {
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Atividade criada com sucesso!");
        setNewActivityVisible(false);
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  const updateActivities = (id, data) => {
    api
      .patch(`/activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Atividade atualizada com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  const deleteActivity = (id) => {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Atividade deletada com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        deleteActivities,
        updateActivities,
        createActivities,
        newActivityVisible,
        setNewActivityVisible,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
