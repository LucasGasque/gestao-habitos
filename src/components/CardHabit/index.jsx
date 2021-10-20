import {
  ContainerCard,
  ContainerButtons,
  ContainerHeaderCard,
  CardButton,
  ContainerImage,
  ContainerDate,
  CointainerProgress,
} from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

const CardHabit = ({ goal, img, nivel }) => {
  return (
    <>
      <ContainerCard>
        <ContainerHeaderCard>
          <ContainerImage>{img}</ContainerImage>
          <ContainerButtons>
            <CardButton>
              <DeleteIcon sx={{ width: "18px" }} />
            </CardButton>
            <CardButton>
              <DoneIcon sx={{ width: "18px" }} />
            </CardButton>
          </ContainerButtons>
        </ContainerHeaderCard>

        <ContainerDate>
          <h3>{goal}</h3>
          <p>{nivel}</p>
        </ContainerDate>

        <CointainerProgress>
          <div></div>
        </CointainerProgress>
      </ContainerCard>
    </>
  );
};

export default CardHabit;
