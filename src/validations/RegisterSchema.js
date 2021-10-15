import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Campo obrigatório."),
  email: yup
    .string()
    .required("Campo obrigatório.")
    .email("Formato inválido."),
  emailConfirm: yup
    .string()
    .required("Campo obrigatório.")
    .oneOf([yup.ref("email"), null], "E-mails não conferem."),
  password: yup
    .string()
    .required("Campo obrigatório.")
    .matches(
      "^(?=.*[a-z])(?=.*[0-9])(?=.{6,})",
      "A senha precisa conter pelo menos uma letra maiúscula, minúscula e um número."
    ),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "Senhas não conferem."),
});

export default schema;
