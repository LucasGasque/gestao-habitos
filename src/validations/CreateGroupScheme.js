import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório"),
  description: yup
    .string()
    .required("Campo obrigatório"),
  category: yup
    .string()
    .required("Campo obrigatório"),
});
