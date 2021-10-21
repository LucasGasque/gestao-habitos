import { createContext, useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { LoginContext } from "../Login/Login";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const [infoGroup, setInfoGroup] = useState();
  const [newGroupVisible, setNewGroupVisible] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState();
  const [page, setPage] = useState(
    "https://kenzie-habits.herokuapp.com/groups/"
  );

  useEffect(() => {
    if (token) {
      api
        .get("/groups/subscriptions/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setSubscriptions(response.data))
        .catch((err) => console.log(err));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      if (page !== null) {
        fetch(`${page}`)
          .then((response) => response.json())
          .then((response) => {
            setGroups([...groups, ...response.results]);
            setPage(response.next);
          })
          .catch((err) => console.log(err));
      }
    }
  }, []);

  const getSubscriptions = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setSubscriptions(response.data))
      .catch((err) => console.log(err));
  };

  const getGroup = (id) => {
    api
      .get(`/groups/${id}/`)
      .then((response) => setSelectedGroup(response.data));
  };

  const createGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setInfoGroup(response.data);
        getSubscriptions();
        setNewGroupVisible(false)
        toast.info("Grupo criado com sucesso!");
      })
      .catch((_) => toast.info("Algo deu errado."));
  };

  const updateGroup = (id, data) => {
    api
      .patch(`/groups/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.info("Grupo atualizado com sucesso!"))
      .catch((_) => toast.info("Algo deu errado."));
  };

  const subscribeGroup = (id) => {
    api
      .post(
        `/groups/${id}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        getSubscriptions();
        toast.info("Foi inscrito com sucesso!");
      })
      .catch((_) => toast.info("Algo deu errado."));
  };

  const unsubscribeGroup = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getSubscriptions();
        toast.info("Se desinscreveu com sucesso!");
      })
      .catch((_) => toast.info("Algo deu errado."));
  };

  return (
    <GroupContext.Provider
      value={{
        getSubscriptions,
        unsubscribeGroup,
        subscribeGroup,
        updateGroup,
        createGroup,
        getGroup,
        infoGroup,
        selectedGroup,
        groups,
        subscriptions,
        newGroupVisible,
        setNewGroupVisible,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
