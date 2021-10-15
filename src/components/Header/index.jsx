import { Container, CustomButtonPurple, CustomButtonWhite } from "./style";

const Header = () => {
  return (
    <Container>
      <h1>Make it Habit!</h1>
      <div>
        <CustomButtonPurple>Login</CustomButtonPurple>
        <CustomButtonWhite>Register</CustomButtonWhite>
      </div>
    </Container>
  );
};

export default Header;
