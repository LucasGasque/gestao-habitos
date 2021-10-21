import { Container, Modal, DivButton } from "./styles";
import { useContext } from "react";
import { GroupContext } from "../../providers/Group/Group";
import { TextField, Button, Autocomplete } from "@mui/material";
import { schema } from "../../validations/CreateGroupScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CategoriesContext } from "../../providers/Categories/Categories";

const CreateGroup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { createGroup, newGroupVisible, setNewGroupVisible } =
    useContext(GroupContext);

  const { categories } = useContext(CategoriesContext);

  return (
    newGroupVisible && (
      <Container>
        <Modal onSubmit={handleSubmit(createGroup)}>
          <h2>Criar novo grupo</h2>

          <TextField
            sx={{ width: 260 }}
            label="Nome"
            size="small"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            sx={{ width: 260 }}
            multiline
            rows={4}
            label="Descrição"
            size="small"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
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
              Criar
            </Button>
            <Button
              onClick={() => setNewGroupVisible(false)}
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

export default CreateGroup;
