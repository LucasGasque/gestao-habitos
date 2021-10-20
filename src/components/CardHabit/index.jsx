import {
  ContainerCard,
  ContainerButtons,
  ContainerHeaderCard,
  CardButton,
} from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { fontSize, height } from "@mui/system";

const CardHabit = () => {
  return (
    <>
      <ContainerCard>
        <ContainerHeaderCard>
          <img></img>
          <ContainerButtons>
            <CardButton>
              <DeleteIcon sx={{ width: "18px" }} />
            </CardButton>
            <CardButton>
              <DoneIcon sx={{ width: "18px" }} />
            </CardButton>
          </ContainerButtons>
        </ContainerHeaderCard>
      </ContainerCard>
    </>
  );
};

export default CardHabit;
