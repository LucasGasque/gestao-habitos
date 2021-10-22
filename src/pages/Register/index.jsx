import { RegisterContext } from "../../providers/register/Register";
import { LoginContext } from "../../providers/Login/Login";
import { Redirect } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { schema } from "../../validations/RegisterSchema";
import { useContext } from "react";
import Header from "../../components/Header";
import { Container, Form, RegisterTitle, Link, Image } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import registerSVG from "../../img/svgs/RegisterSVG.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Register = () => {
  const { handleRegister } = useContext(RegisterContext);
  const { authenticated } = useContext(LoginContext);

  useEffect(() => Aos.init({ duration: 2000 }), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (authenticated) return <Redirect to="/profile" />;

  return (
    <>
      <Header />
      <Container>
        <Image data-aos="fade-left" src={registerSVG} alt="register" />
        <Form data-aos="zoom-in-up" onSubmit={handleSubmit(handleRegister)}>
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
            type="password"
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
            type="password"
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
