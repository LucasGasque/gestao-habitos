import * as yup from "yup";

export const schema = yup.object().shape({
  category: yup
    .string()
    .required("Campo obrigatório"),
});