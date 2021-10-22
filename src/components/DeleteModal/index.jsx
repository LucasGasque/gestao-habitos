import { Container, Modal } from "./style";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { DeleteModalContext } from "../../providers/DeleteModal/DeleteModal";

const DeleteModal = ({ type, id, deleteVisible, setDeleteVisible }) => {
  const { defineTitle, defineDelete } = useContext(DeleteModalContext);

  return (
    deleteVisible && (
      <Container>
        <Modal>
          <h2>{defineTitle(type)}</h2>
          <div>
            <Button
              variant="contained"
              sx={{ width: "48%", height: 30 }}
              onClick={() => {
                setDeleteVisible(false);
                defineDelete(type, id);
              }}
            >
              Deletar
            </Button>
            <Button
              variant="outlined"
              sx={{ width: "48%", height: 30 }}
              onClick={() => setDeleteVisible(false)}
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
