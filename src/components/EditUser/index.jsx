import { Container, Modal, DivButton } from "./style";
import { Button, TextField } from "@material-ui/core";
import { useContext } from "react";
import { LoginContext } from "../../providers/Login/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../../validations/EditUserScheme";

const EditUser = ({userVisible, setUserVisible}) => {

  const { updateProfile } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (data) => {
    updateProfile(data);
    setUserVisible(false);
  };

  return (
    userVisible && (
      <Container>
        <Modal onSubmit={handleSubmit(handleUpdate)}>
          <h2>Editar Nome?</h2>
          <TextField
            sx={{ width: 270 }}
            size="small"
            label="Novo Nome"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <DivButton>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "48%", height: 30 }}
            >
              Confirmar
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "48%", height: 30 }}
              onClick={() => setUserVisible(false)}
            >
              Cancelar
            </Button>
          </DivButton>
        </Modal>
      </Container>
    )
  );
};

export default EditUser;
