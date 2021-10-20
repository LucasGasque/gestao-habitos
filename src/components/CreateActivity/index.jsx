import { Container, DivButton, Modal } from "./styles";
import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities/Activities";
import { TextField, Button } from "@mui/material";
import { schema } from "../../validations/CreateActivityScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CreateActivity = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { createActivities, visibleCreateAct, setVisibleCreateAct } =
    useContext(ActivitiesContext);

  return (
    visibleCreateAct && (
      <Container>
        <Modal onSubmit={handleSubmit(createActivities)}>
          <h2>Criar nova atividade</h2>

          <TextField
            sx={{ width: 260 }}
            label="Título"
            size="small"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            sx={{ width: 260 }}
            size="small"
            type="datetime-local"
            {...register("date")}
            error={!!errors.date}
            helperText={errors.date?.message}
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
              onClick={() => setVisibleCreateAct(false)}
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

export default CreateActivity;
