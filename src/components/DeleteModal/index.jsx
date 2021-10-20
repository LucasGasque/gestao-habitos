import { Container, DeleteButton, CancelButton } from "./style";

const DeleteHabit = () => {
    return(
        <Container>
            <h2>Deletar Hábito?</h2>
            <div>
                <DeleteButton>Deletar</DeleteButton>
                <CancelButton>Cancelar</CancelButton>
            </div>
        </Container>
    );
};

export default DeleteHabit