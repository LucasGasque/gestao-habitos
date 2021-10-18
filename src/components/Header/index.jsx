import { Container } from "./style";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Container>
      <h1>Make it Habit!</h1>
      <div>
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </Container>
  );
};

export default Header;
