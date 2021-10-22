import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup
    .string()
    .required("Campo obrigatório"),
  date: yup
    .string()
    .required("Campo obrigatório"),
});
