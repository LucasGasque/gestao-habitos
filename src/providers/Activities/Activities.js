import {createContext} from 'react'
import {toast} from 'react'
import api from '../../services/api'

export const ActivitiesContext = createContext()

export const ActivitiesProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem("@Login:token"));

    const createActivities = (data) => {
        api
          .post("/activities/", data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((_) => {
            toast.info("Atividade criada com sucesso!");
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
    
      const deleteActivities = (id) => {
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
          <ActivitiesContext.Provider value={{deleteActivities,updateActivities,createActivities}}>
              {children}
          </ActivitiesContext.Provider>
      )
}