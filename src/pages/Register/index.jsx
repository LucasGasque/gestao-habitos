import { RegisterContext } from "../../providers/register/Register";
import { useHistory, Redirect } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { schema } from "../../validations/RegisterSchema";
import { useContext } from "react";
import Header from "../../components/Header";
import {
  Container,
  Form,
  RegisterTitle,
  Link,
  Image,
  ContainerHeader,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Register = () => {
  const history = useHistory();
  const { handleRegister } = useContext(RegisterContext);

  const goToLogin = () => history.push("/login");

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
        <Image src="" alt="register" />
        <Form onSubmit={handleSubmit(handleRegister)}>
          <RegisterTitle>Cadastro</RegisterTitle>
          <TextField
            {...register("username")}
            sx={{ width: 270 }}
            size="small"
            variant="outlined"
            margin="none"
            label="Usuário"
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            {...register("email")}
            sx={{ width: 270 }}
            size="small"
            variant="outlined"
            margin="none"
            label="E-mail"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("emailConfirm")}
            sx={{ width: 270 }}
            size="small"
            variant="outlined"
            margin="none"
            label="Confirmar e-mail"
            error={!!errors.emailConfirm}
            helperText={errors.emailConfirm?.message}
          />
          <TextField
            {...register("password")}
            type='password'
            sx={{ width: 270 }}
            size="small"
            variant="outlined"
            margin="none"
            label="Senha"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            {...register("passwordConfirm")}
            type='password'
            sx={{ width: 270 }}
            size="small"
            variant="outlined"
            margin="none"
            label="Confirmar senha"
            error={!!errors.passwordConfirm}
            helperText={errors.passwordConfirm?.message}
          />
          <Button
            type="submit"
            disableElevation
            variant="contained"
            sx={{ width: 270, fontWeight: "bold" }}
          >
            Cadastrar
          </Button>
          <Link>
            Já tem uma conta? <a href="/login">Clique aqui!</a>
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default Register;
