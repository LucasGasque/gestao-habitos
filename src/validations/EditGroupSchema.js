import * as yup from "yup";

export const schema = yup.object().shape({
  newCategory: yup
    .string()
    .required("Campo obrigatório"),
});