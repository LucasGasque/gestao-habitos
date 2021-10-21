import { Container, Modal, DivButton } from "./styles";
import { useContext } from "react";
import { GroupContext } from "../../providers/Group/Group";
import { TextField, Button, Autocomplete } from "@mui/material";
import { schema } from "../../validations/EditGroupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CategoriesContext } from "../../providers/Categories/Categories";

const EditGroup = (id) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { updateGroup, editGroupVisible, setEditGroupVisible } =
    useContext(GroupContext);

    const onSubmit = (data) => {
    updateGroup(id, data)
  }

  const { categories } = useContext(CategoriesContext);

  return (
    editGroupVisible && (
      <Container>
        <Modal onSubmit={handleSubmit(onSubmit)}>
          <h2>Criar novo grupo</h2>

          <Autocomplete
            disableClearable
            disablePortal
            size="small"
            options={categories}
            sx={{ width: 260 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categoria"
                {...register("category")}
                error={!!errors.category}
                helperText={errors.category?.message}
              />
            )}
          />
          <DivButton>
            <Button
              type="submit"
              sx={{ width: 260, marginBottom: 1.6 }}
              size="small"
              variant="contained"
            >
              Confirmar
            </Button>
            <Button
              onClick={() => setEditGroupVisible(false)}
              sx={{ width: 260 }}
              size="small"
              variant="outlined"
            >
              Cancelar
            </Button>
          </DivButton>
        </Modal>
      </Container>
    )
  );
};

export default EditGroup;
