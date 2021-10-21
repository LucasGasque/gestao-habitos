import { createContext, useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { LoginContext } from "../Login/Login";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const [loadingGroups, setLoadingGroups] = useState(false);
  const [infoGroup, setInfoGroup] = useState();
  const [newGroupVisible, setNewGroupVisible] = useState(false);
  const [editGroupVisible, setEditGroupVisible] = useState(false);

  const [subscriptions, setSubscriptions] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState();
  const [nextPage, setNextPage] = useState(
    "https://kenzie-habits.herokuapp.com/groups/"
  );
  const [hasNextPage, setHasNextPage] = useState(true);

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
      if (nextPage !== null) {
        fetch(`${nextPage}`)
          .then((response) => response.json())
          .then((response) => {
            setGroups([...groups, ...response.results]);
            setNextPage(response.next);
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
        setNewGroupVisible(false);
        toast.info("Grupo criado com sucesso!");
      })
      .catch((_) => toast.info("Algo deu errado."));
  };

  const updateGroup = ({ id }, data) => {
    api
      .patch(`/groups/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.info("Grupo atualizado com sucesso!");
        setEditGroupVisible(false);
      })
      .catch((_) => toast.info("Algo deu errado."));
  };

  const subscribeGroup = ({ id }) => {
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

  const unsubscribeGroup = ({ id }) => {
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

  const getNextPage = () => {
    if (token) {
      if (nextPage !== null) {
        setLoadingGroups(true);
        api
          .get(`${nextPage}`)
          .then((response) => {
            setGroups([...groups, ...response.data.results]);
            setNextPage(response.data.next);
            setHasNextPage(response.data.next !== null);
          })
          .catch((err) => console.log(err));
        setLoadingGroups(false);
      }
    }
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
        getNextPage,
        hasNextPage,
        loadingGroups,
        newGroupVisible,
        setNewGroupVisible,
        editGroupVisible,
        setEditGroupVisible,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
