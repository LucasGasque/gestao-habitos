import { Container, DivButton, Modal } from "./styles";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits/Habits";
import { TextField, Button, Autocomplete } from "@mui/material";
import { schema } from "../../validations/CreateHabitSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CategoriesContext } from "../../providers/Categories/Categories";

const CreateHabit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    createHabits,
    newHabitVisible,
    setNewHabitVisible,
    difficulties,
    frequencies,
  } = useContext(HabitsContext);

  const { categories } = useContext(CategoriesContext);

  return (
    newHabitVisible && (
      <Container>
        <Modal onSubmit={handleSubmit(createHabits)}>
          <h2>Criar novo hábito</h2>

          <TextField
            sx={{ width: 260 }}
            label="Título"
            size="small"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
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
          <Autocomplete
            disableClearable
            disablePortal
            size="small"
            options={difficulties}
            sx={{ width: 260 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Dificuldade"
                {...register("difficulty")}
                error={!!errors.difficulty}
                helperText={errors.difficulty?.message}
              />
            )}
          />
          <Autocomplete
            disableClearable
            disablePortal
            size="small"
            options={frequencies}
            sx={{ width: 260 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Frequência"
                {...register("frequency")}
                error={!!errors.frequency}
                helperText={errors.frequency?.message}
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
              onClick={() => setNewHabitVisible(false)}
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

export default CreateHabit;
