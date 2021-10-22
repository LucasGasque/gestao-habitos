import { createContext } from "react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { GroupContext } from "../Group/Group";
import { LoginContext } from "../Login/Login";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [newActivityVisible, setNewActivityVisible] = useState(false);

  const { token } = useContext(LoginContext);
  const { getSubscriptions } = useContext(GroupContext);

  const createActivities = async ({ title, date }, group) => {
    const data = { title, realization_time: date, group };
    await api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Atividade criada com sucesso!");
        setNewActivityVisible(false);
      })
      .catch((_) => toast.error("Algo deu errado."));
    getSubscriptions();
  };

  const updateActivities = async (id, data) => {
    const titleObj = { title: data.newTitle };
    await api
      .patch(`/activities/${id}/`, titleObj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Atividade atualizada com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
    getSubscriptions();
  };

  const deleteActivity = async (id) => {
    await api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Atividade deletada com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
    getSubscriptions();
  };

  return (
    <ActivitiesContext.Provider
      value={{
        deleteActivity,
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
