import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(true);

  const handleLogin = ({ username, password }) => {
    const user = { username, password };
    api
      .post("/sessions", user)
      .then((response) => {
        const { sucess } = response.data;
        localStorage.setItem("@Login:token", JSON.stringify(sucess));
        setAuthenticated(true);
        history.push("/dasboard");
      })
      .catch((_) => toast.error("Senha ou e-mail incorretos."));
  };

  return (
    <LoginContext.Provider value={{ authenticated, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
