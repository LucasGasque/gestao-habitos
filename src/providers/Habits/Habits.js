import { createContext, useState, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Login:token"));
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (token) {
      api
        .get("/habits/personal/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setHabits(response.data))
        .catch((_) => toast.error("Algo deu errado."));
    }
  }, []);

  const createHabits = (data) => {
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Hábito criado com sucesso!");
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  const deleteHabit = (id) => {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  const updateHabit = (id, data) => {
    api
      .patch(`/habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((_) => toast.error("Algo deu errado."));
  };

  return (
    <HabitsContext.Provider
      value={{ habits, createHabits, deleteHabit, updateHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
