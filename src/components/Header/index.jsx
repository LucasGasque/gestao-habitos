import Button from "@material-ui/core/Button";
import { Container } from "./style";

const Header = () => {
  return (
    <>
      <h1>Make it Habit!</h1>
      <div>
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </>
  );
};

export default Header;
