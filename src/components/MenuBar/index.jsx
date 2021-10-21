import { LoginContext } from "../../providers/Login/Login";
import { Container, Box, Button, GraphButton, GearButton, User } from "./style";
import { useContext } from "react";
import { HiUserGroup, HiUser } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { FiPieChart } from "react-icons/fi";
import { BsFillGearFill } from "react-icons/bs";
import { useHistory } from "react-router";

const MenuBar = () => {
  const { avatar, handleLogOut, user } = useContext(LoginContext);
  const history = useHistory();
  const highlight = {
    "": 1,
    "/profile": 2,
    "/group-search": 3,
    "/group": 4,
  };

  return (
    <Container>
      <User>
        <img src={avatar} alt="avatar" />
        <h1>{user}</h1>
        <GearButton>
          <BsFillGearFill size="2.5em" />
        </GearButton>
      </User>
      <Box num={highlight[history.location.pathname]}>
        <GraphButton>
          <FiPieChart size="2.5em" />
          <p>Gráficos</p>
        </GraphButton>
        <Button onClick={() => history.push("/profile")}>
          <HiUser size="2.5em" />
          <p>Dashboard</p>
        </Button>
        <Button onClick={() => history.push("group-search")}>
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
    </Container>
  );
};

export default MenuBar;
