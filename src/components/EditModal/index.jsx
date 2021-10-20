import { Container, Modal, DivButton } from "./style";
import { Button, TextField } from "@material-ui/core";
import { useContext } from "react";
import { EditModalContext } from "../../providers/EditModal/EditModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const EditModal = ({ type, id }) => {
  const { defineTitle, defineEdit, defineSchema, editVisible, setEditVisible } =
    useContext(EditModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(defineSchema(type)),
  });

  const onSubmit = (data) => {
    defineEdit(type, id, data)
  }

  return (
    editVisible && (
      <Container>
        <Modal onSubmit={handleSubmit(onSubmit)}>
          <h2>{defineTitle(type)}</h2>
          <TextField
            sx={{width: 270}}
            size='small'
            label="Novo título"
            {...register("newTitle")}
            error={!!errors.newTitle}
            helperText={errors.newTitle?.message}
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
            onClick={() => setEditVisible(false)}
          >
            Cancelar
          </Button>
          </DivButton>
        </Modal>
      </Container>
    )
  );
};

export default EditModal;
