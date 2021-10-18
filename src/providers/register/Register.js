import { createContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const history = useHistory();

  const handleRegister = ({ username, email, password }) => {
    const user = { username, email, password };
    api
      .post("/users/", user)
      .then((response) => {
        localStorage.setItem("@Register:user", response.data);
        history.push("/login");
      })
      .catch((_) => toast.error("Erro ao criar a conta. Use outro e-mail."));
  };

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};
