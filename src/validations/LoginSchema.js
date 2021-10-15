import * as yup from "yup";

const schema = yup.object().yup.shape({
  username: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default schema;
