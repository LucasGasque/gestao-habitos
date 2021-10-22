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
import EditModal from "../EditModal/index";
import { toast } from "react-toastify";

const CardHabit = ({ content, type }) => {
  const { updateHabitProgress } = useContext(HabitsContext);
  const { updateGoalProgress } = useContext(GoalsContext);
  const { categoriesPictures } = useContext(CategoriesContext);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);

  const HandleAchieved = () => {
    if (type === "habit") {
      if (content.how_much_achieved >= 200) {
        updateHabitProgress(content.id, {
          how_much_achieved: 210,
          achieved: true,
        });
      } else {
        updateHabitProgress(content.id, {
          how_much_achieved: content.how_much_achieved + 10,
        });
      }
    } else {
      if (content.how_much_achieved >= 200) {
        updateGoalProgress(content.id, {
          how_much_achieved: 210,
          achieved: true,
        });
      } else {
        updateGoalProgress(content.id, {
          how_much_achieved: content.how_much_achieved + 10,
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
                sx={{ width: "18px", color: "white" }}
              />
            </CardButton>
            <CardButton>
              <SettingsIcon
                onClick={() => setEditVisible(true)}
                sx={{ width: "18px", color: "white" }}
              />
            </CardButton>
            <CardButton>
              <DoneIcon
                onClick={
                  content.how_much_achieved < 210 && content.achieved !== true
                    ? HandleAchieved
                    : () => {
                        toast.error("Já está completo!");
                      }
                }
                sx={{ width: "18px", color: "white" }}
              />
            </CardButton>
          </ContainerButtons>
        </ContainerHeaderCard>

        <ContainerDate>
          <h3>{content.title}</h3>
          <p>{content.difficulty}</p>
        </ContainerDate>

        <CointainerProgress>
          <div
            style={{
              width:
                content.how_much_achieved >= 210 || content.achieved === true
                  ? "100%"
                  : `calc(100% / 210 * ${content?.how_much_achieved})`,
            }}
          ></div>
        </CointainerProgress>
      </ContainerCard>
      <DeleteModal
        deleteVisible={deleteVisible}
        setDeleteVisible={setDeleteVisible}
        type={type}
        id={content.id}
      />
      <EditModal
        editVisible={editVisible}
        setEditVisible={setEditVisible}
        type={type}
        id={content.id}
      />
    </>
  );
};

export default CardHabit;
