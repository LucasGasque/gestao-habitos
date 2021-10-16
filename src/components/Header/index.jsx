import { Container, ButtonPurple, ButtonWhite } from "./style";

const Header = () => {
  return (
    <Container>
      <h1>Make it Habit!</h1>
      <div>
        <ButtonPurple>Login</ButtonPurple>
        <ButtonWhite>Register</ButtonWhite>
      </div>
    </Container>
  );
};

export default Header;
