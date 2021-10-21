import { createContext, useState, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoginContext } from "../Login/Login";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [newHabitVisible, setNewHabitVisible] = useState(false);
  const { token, userId } = useContext(LoginContext);

  const difficulties = ["Fácil", "Normal", "Díficil", "Muito díficil"];
  const frequencies = ["Diário", "Semanal", "Mensal", "Anual"];

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

  const getHabits = () => {
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
  };

  const createHabits = ({ title, category, difficulty, frequency }) => {
    const data = {
      title,
      category,
      difficulty,
      frequency,
      achieved: false,
      how_much_achieved: 0,
      user: userId,
    };

    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Hábito criado com sucesso!");
        setNewHabitVisible(false);
        getHabits();
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
      .then((_) => getHabits())
      .catch((_) => toast.error("Algo deu errado."));
  };

  const updateHabit = (id, data) => {
    const titleObj = {title: data.newTitle}

    api
      .patch(`/habits/${id}/`,titleObj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success('Hábito atualizado'))
      .catch((_) => toast.error("Algo deu errado."));
  };

  return (
    <HabitsContext.Provider
      value={{
        createHabits,
        deleteHabit,
        difficulties,
        frequencies,
        updateHabit,
        habits,
        newHabitVisible,
        setNewHabitVisible,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
