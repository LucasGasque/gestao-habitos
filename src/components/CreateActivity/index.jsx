import { Container, DivButton, Modal } from "./styles";
import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities/Activities";
import { TextField, Button } from "@mui/material";
import { schema } from "../../validations/CreateActivityScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CreateActivity = ({group}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { createActivities, newActivityVisible, setNewActivityVisible } =
    useContext(ActivitiesContext);

    const handleActivity = (data) => {
      createActivities(data, group);
    };

  return (
    newActivityVisible && (
      <Container>
        <Modal onSubmit={handleSubmit(handleActivity)}>
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
              onClick={() => setNewActivityVisible(false)}
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
