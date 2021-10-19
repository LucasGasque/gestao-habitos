import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import av1 from "../../img/avatars/1.png";
import av2 from "../../img/avatars/2.png";
import av3 from "../../img/avatars/3.png";
import av4 from "../../img/avatars/4.png";
import av5 from "../../img/avatars/5.png";
import av6 from "../../img/avatars/6.png";
import av7 from "../../img/avatars/7.png";
import av8 from "../../img/avatars/8.png";
import av9 from "../../img/avatars/9.png";
import av10 from "../../img/avatars/10.png";
import av11 from "../../img/avatars/11.png";
import av12 from "../../img/avatars/12.png";
import av13 from "../../img/avatars/13.png";
import av14 from "../../img/avatars/14.png";
import av15 from "../../img/avatars/15.png";
import av16 from "../../img/avatars/16.png";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [avatar, setAvatar] = useState(av1);
  const [user, setUser] = useState({ username: "Lucas" });
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@MakeItHabit!:ID")) || ""
  );

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@Login:token")) || ""
  );

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("@Login:token")) || "");
  }, [authenticated]);

  useEffect(() => {
    setAvatar(JSON.parse(localStorage.getItem("@avatar")) || av1);
  }, []);

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("@MakeItHabit!:ID")) || "");
  }, [authenticated]);

  const randomNumber = () => Math.floor(Math.random() * 17) + 1;
  const avImgs = {
    1: av1,
    2: av2,
    3: av3,
    4: av4,
    5: av5,
    6: av6,
    7: av7,
    8: av8,
    9: av9,
    10: av10,
    11: av11,
    12: av12,
    13: av13,
    14: av14,
    15: av15,
    16: av16,
  };

  const handleLogin = ({ username, password }) => {
    const user = { username, password };
    api
      .post("/sessions/", user)
      .then((response) => {
        const { access } = response.data;
        const tokenDecoded = jwt_decode(access);

        localStorage.setItem(
          "@MakeItHabit!: ID",
          JSON.stringify(tokenDecoded.user_id)
        );
        localStorage.setItem("@Login:token", JSON.stringify(access));

        setAuthenticated(true);

        setAvatar(avImgs[randomNumber]);
        localStorage.setItem("@avatar", JSON.stringify(avatar));

        history.push("/dasboard");
      })
      .catch((_) => toast.error("Senha ou e-mail incorretos."));
  };

  const handleLogOut = () => {
    localStorage.removeItem("@Login:token");
    localStorage.removeItem("@avatar");
    localStorage.removeItem("@MakeItHabit!:ID");

    setAuthenticated(false);
    history.push("/login");
  };

  return (
    <LoginContext.Provider
      value={{
        authenticated,
        handleLogin,
        handleLogOut,
        avatar,
        user,
        token,
        userId,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
