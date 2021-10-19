import { createContext, useState, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from 'react'
import { LoginContext } from '../../providers/Login/Login'

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {

  const [habits, setHabits] = useState();
  const [visible, setVisible] = useState(true)
  const {token, userId} = useContext(LoginContext)

  const difficulties = ['Fácil', 'Normal', 'Díficil', 'Muito díficil']
  const frequencies = ['Diário', 'Semanal','Mensal','Anual']

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
  }, [habits]);

  const createHabits = ({title, category, difficulty,frequency}) => {
    const data = {title, category, difficulty, frequency, achieved:false, how_much_achieved:100, user:userId}
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Hábito criado com sucesso!");
        setVisible(false)
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
    <HabitsContext.Provider value={{ createHabits, deleteHabit, difficulties, frequencies, updateHabit, visible, setVisible }}>
      {children}
    </HabitsContext.Provider>
  );
};
