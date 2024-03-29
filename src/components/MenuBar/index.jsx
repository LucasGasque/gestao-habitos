import { LoginContext } from "../../providers/Login/Login";
import { Container, Box, Button, GearButton, User } from "./style";
import { useContext, useState } from "react";
import { HiUserGroup, HiUser } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

import { BsFillGearFill } from "react-icons/bs";
import { useHistory } from "react-router";
import EditUser from "../EditUser";

const MenuBar = () => {
  const history = useHistory();

  const highlight = {
    "/profile": 1,
    "/group-search": 2,
    "/my-groups": 3,
  };

  const [userVisible, setUserVisible] = useState(false);
  const { avatar, handleLogOut, user } = useContext(LoginContext);

  return (
    <Container>
      <User>
        <img src={avatar} alt="avatar" />
        <h1>{user}</h1>
        <GearButton onClick={() => setUserVisible(true)}>
          <BsFillGearFill size="2.5em" />
        </GearButton>
      </User>
      <Box num={highlight[history.location.pathname]}>
        <Button onClick={() => history.push("/profile")}>
          <HiUser size="2.5em" />
          <p>Dashboard</p>
        </Button>
        <Button onClick={() => history.push("/group-search")}>
          <BiSearchAlt size="2.5em" />
          <p>Pesquisar</p>
        </Button>
        <Button onClick={() => history.push("/my-groups")}>
          <HiUserGroup size="2.5em" />
          <p>Meus grupos</p>
        </Button>
        <Button onClick={handleLogOut}>
          <IoMdLogOut size="2.5em" />
          <p>Sair</p>
        </Button>
      </Box>
      <EditUser userVisible={userVisible} setUserVisible={setUserVisible} />
    </Container>
  );
};

export default MenuBar;
