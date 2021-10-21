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
import { useState } from "react";

const CardHabit = ({ id, title, category, dificulty, data }) => {
  const { updateHabit } = useContext(HabitsContext);
  const [progress, setProgress] = useState("0");

  const HandleAchieved = () => {
    if (Number(progress) < 210) {
      setProgress((Number(progress) + 10).toString());
      if (Number(progress) <= 42) {
        updateHabit({ how_much_achieved: 10 });
      } else if (Number(progress) <= 84) {
        updateHabit({ how_much_achieved: 20 });
      } else if (Number(progress) <= 126) {
        updateHabit({ how_much_achieved: 30 });
      } else if (Number(progress) <= 168) {
        updateHabit({ how_much_achieved: 40 });
      } else if (Number(progress) > 168) {
        updateHabit({ how_much_achieved: 50 });
      }
    }
    if (Number(progress) === 210) {
      updateHabit({ how_much_achieved: 50, achieved: true });
    }
  };

  return (
    <>
      <ContainerCard>
        <ContainerHeaderCard>
          <ContainerImage></ContainerImage>
          <ContainerButtons>
            <CardButton>
              <DeleteIcon
                onClick={() => {}}
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
                onClick={HandleAchieved}
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
          <div style={{ width: `${progress}px` }}></div>
        </CointainerProgress>
      </ContainerCard>
    </>
  );
};

export default CardHabit;
