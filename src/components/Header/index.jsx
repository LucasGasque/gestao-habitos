import { Container } from "./style";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  const sendTo = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <h1>Make it Habit!</h1>
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => sendTo("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => sendTo("/register")}
        >
          Register
        </Button>
      </div>
    </Container>
  );
};

export default Header;
