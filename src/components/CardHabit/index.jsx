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
import { CategoriesContext } from "../../providers/Categories/Categories";
import DeleteModal from "../DeleteModal";
import { GoalsContext } from "../../providers/Goals/Goals";

const CardHabit = ({ content, type }) => {
  const { updateHabit } = useContext(HabitsContext);
  const { updateGoal } = useContext(GoalsContext);
  const { categoriesPictures } = useContext(CategoriesContext);

  const [progress, setProgress] = useState(
    content.how_much_achieved > 21
      ? Math.floor(content.how_much_achieved / 21)
      : content.how_much_achieved || 0
  );
  const [deleteVisible, setDeleteVisible] = useState(false);

  const HandleAchieved = () => {
    if (type === "habit") {
      if (content.how_much_achieved === 20) {
        setProgress(21);
        updateHabit(content.id, { how_much_achieved: 21, achieved: true });
      } else {
        setProgress(progress + 1);
        updateHabit(content.id, {
          how_much_achieved: progress + 1,
        });
      }
    } else {
      if (progress === 20) {
        setProgress(21);
        updateGoal(content.id, { how_much_achieved: 21, achieved: true });
      } else {
        setProgress(progress + 1);
        updateGoal(content.id, {
          how_much_achieved: progress + 1,
        });
      }
    }
  };

  return (
    <>
      <ContainerCard>
        <ContainerHeaderCard>
          <ContainerImage>
            <img
              src={
                categoriesPictures[content?.category]
                  ? categoriesPictures[content?.category]
                  : categoriesPictures["Interação Social"]
              }
              alt={content?.category}
            />
          </ContainerImage>
          <ContainerButtons>
            <CardButton>
              <DeleteIcon
                onClick={() => setDeleteVisible(true)}
                sx={{ width: "18px", color: "white", opacity: "50%" }}
              />
            </CardButton>
            <CardButton>
              <SettingsIcon
                onClick={() => updateHabit(content.id, content.data)}
                sx={{ width: "18px", color: "white", opacity: "50%" }}
              />
            </CardButton>
            <CardButton>
              <DoneIcon
                onClick={progress < 21 ? HandleAchieved : ""}
                sx={{ width: "18px", color: "white", opacity: "50%" }}
              />
            </CardButton>
          </ContainerButtons>
        </ContainerHeaderCard>

        <ContainerDate>
          <h3>{content.title}</h3>
          <p>{content.difficulty}</p>
        </ContainerDate>

        <CointainerProgress>
          <div style={{ width: `${progress * 10}px` }}></div>
        </CointainerProgress>
      </ContainerCard>
      <DeleteModal
        deleteVisible={deleteVisible}
        setDeleteVisible={setDeleteVisible}
        type={type}
        id={content.id}
      ></DeleteModal>
    </>
  );
};

export default CardHabit;
