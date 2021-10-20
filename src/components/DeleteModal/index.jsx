import { Container, Modal } from "./style";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { DeleteModalContext } from "../../providers/DeleteModal/DeleteModal";

const DeleteModal = ({ type, id }) => {
  const { defineTitle, defineDelete, visible, setVisible } =
    useContext(DeleteModalContext);

  return (
    visible && (
      <Container>
        <Modal>
          <h2>{defineTitle(type)}</h2>
          <div>
            <Button
              variant="contained"
              sx={{ width: "48%", height: 30 }}
              onClick={() => defineDelete(type, id)}
            >
              Deletar
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "48%", height: 30 }}
              onClick={() => setVisible(false)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
      </Container>
    )
  );
};

export default DeleteModal;
