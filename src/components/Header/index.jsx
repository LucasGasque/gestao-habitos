import { Container, Content } from "./style";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <Content>
        <h1 onClick={() => sendTo("/")}>Make it Habit!</h1>
        <div>
          <Button
            sx={{
              marginRight: "10px",
            }}
            variant="contained"
            color="primary"
            size="small"
            onClick={() => sendTo("/login")}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => sendTo("/register")}
          >
            Cadastro
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
