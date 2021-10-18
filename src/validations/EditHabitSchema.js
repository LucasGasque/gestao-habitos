import * as yup from "yup";

export const schema = yup.object().shape({
  newTitle: yup
    .string()
    .required("Campo obrigatório"),
});