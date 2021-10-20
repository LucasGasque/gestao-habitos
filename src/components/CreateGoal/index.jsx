import { Container, DivButton, Modal } from "./styles";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits/Habits";
import { GoalsContext } from "../../providers/Goals/Goals";
import { TextField, Button, Autocomplete } from "@mui/material";
import { schema } from "../../validations/CreateGoalScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CreateGoal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { difficulties } = useContext(HabitsContext);

  const { createGoal, newGoalVisible, setNewGoalVisible } =
    useContext(GoalsContext);

  return (
    newGoalVisible && (
      <Container>
        <Modal onSubmit={handleSubmit(createGoal)}>
          <h2>Criar novo objetivo</h2>

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
              onClick={() => setNewGoalVisible(false)}
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

export default CreateGoal;
