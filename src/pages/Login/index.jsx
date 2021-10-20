import { LoginContext } from "../../providers/Login/Login";
import { Container, Box } from "./styles";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validations/LoginSchema";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import loginSVG from "../../img/svgs/LoginSVG.svg";

const Login = () => {
  const history = useHistory();
  const { handleLogin } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Header />
      <Container>
        <Box>
          <img src={loginSVG} alt="login" />
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1>Login</h1>
            <TextField
              sx={{
                width: "254px",
                height: "30px",
              }}
              variant="outlined"
              margin="none"
              label="Usuário"
              size="small"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              sx={{
                width: "254px",
                height: "30px",
              }}
              type="password"
              variant="outlined"
              margin="none"
              label="Senha"
              size="small"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              sx={{
                width: "254px",
                height: "30px",
              }}
              color="primary"
              variant="contained"
              type="submit"
            >
              Logar
            </Button>
            <p>
              Já tem uma conta?
              <button onClick={() => history.push("/register")}>
                Clique aqui!
              </button>
            </p>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
