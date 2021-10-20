import {
  ContainerCard,
  ContainerButtons,
  ContainerHeaderCard,
  CardButton,
  ContainerImage,
  ContainerDate,
  CointainerProgress,
} from "./style";
import { HabitsContext } from "../../providers/Habits/Habits";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import SettingsIcon from "@mui/icons-material/Settings";
import { useContext } from "react";

const CardHabit = ({
  id,
  title,
  category,
  dificulty,
  how_much_achieved,
  data,
}) => {
  const { deleteHabit, updateHabit } = useContext(HabitsContext);
  return (
    <>
      <ContainerCard>
        <ContainerHeaderCard>
          <ContainerImage></ContainerImage>
          <ContainerButtons>
            <CardButton>
              <DeleteIcon
                onClick={() => deleteHabit(id)}
                sx={{ width: "18px", color: "white", opacity: "50%" }}
              />
            </CardButton>
            <CardButton>
              <SettingsIcon
                onClick={() => updateHabit(id, data)}
                sx={{ width: "18px", color: "white", opacity: "50%" }}
              />
            </CardButton>
            <CardButton>
              <DoneIcon
                sx={{ width: "18px", color: "white", opacity: "50%" }}
              />
            </CardButton>
          </ContainerButtons>
        </ContainerHeaderCard>

        <ContainerDate>
          <h3>{title}</h3>
          <p>{dificulty}</p>
        </ContainerDate>

        <CointainerProgress>
          <div></div>
        </CointainerProgress>
      </ContainerCard>
    </>
  );
};

export default CardHabit;
