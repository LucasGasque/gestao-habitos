import { Container } from "./style";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const url = useParams();
  console.log(url);
  const sendTo = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <h1>Make it Habit!</h1>
      <div>
        <Button
          className="groundPurple"
          variant="outlined"
          color="primary"
          onClick={() => sendTo("/login")}
        >
          Login
        </Button>
        <Button
          className="groundWhite"
          variant="outlined"
          color="primary"
          onClick={() => sendTo("/register")}
        >
          Cadastro
        </Button>
      </div>
    </Container>
  );
};

export default Header;
