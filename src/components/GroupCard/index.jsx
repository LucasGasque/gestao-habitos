import { Container, Box, Info } from "./style";
import { Button } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useContext, useState } from "react";
import { GroupContext } from "../../providers/Group/Group";
import { LoginContext } from "../../providers/Login/Login";
import { useHistory } from "react-router";

const GroupCard = ({ name, users, goals, id }) => {
  const history = useHistory();
  const { subscribeGroup, unsubscribeGroup } = useContext(GroupContext);
  const { user } = useContext(LoginContext);
  const [isSub, setIsSub] = useState(users.includes(user));
  const handleSubscribe = () => {
    subscribeGroup(id);
    setIsSub(true);
  };
  const handleUnsubscribe = () => {
    unsubscribeGroup(id);
    setIsSub(false);
  };

  return (
    <Container onClick={() => history.push(`/group/${id}`)}>
      <Box>
        <img src="" alt="grp" />
        <h2>{name}</h2>
      </Box>
      <Info>
        {!isSub ? (
          <Button size="small" onClick={handleSubscribe} variant="contained">
            Inscrever-se
          </Button>
        ) : (
          <Button size="small" onClick={handleUnsubscribe} variant="contained">
            Sair
          </Button>
        )}
        <div>
          <p>{users.length}</p>
          <p>membros</p>
        </div>
        <div>
          <p>{goals.length}</p>
          <p>objetivos</p>
        </div>
      </Info>
      <span>
        <MdKeyboardArrowRight />
      </span>
    </Container>
  );
};

export default GroupCard;
