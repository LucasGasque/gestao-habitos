import {
  Container,
  ContainerButtons,
  ContainerHeaderCard,
  CardButton,
  ContainerImage,
  ContainerDate,
} from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../providers/Categories/Categories";
import DeleteModal from "../DeleteModal";
import Moment from "react-moment";

const ActivityCard = ({ content, type }) => {
  const { categoriesPictures } = useContext(CategoriesContext);

  const [deleteVisible, setDeleteVisible] = useState(false);

  return (
    <>
      <Container>
        <ContainerHeaderCard>
          <ContainerImage>
            <img
              src={categoriesPictures["Interação Social"]}
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
                onClick={() => ""}
                sx={{ width: "18px", color: "white", opacity: "50%" }}
              />
            </CardButton>
          </ContainerButtons>
        </ContainerHeaderCard>

        <ContainerDate>
          <h3>{content.title}</h3>
          <p>
            <Moment format="DD/MM/YYYY">{content.realization_time}</Moment>
          </p>
        </ContainerDate>
      </Container>
      <DeleteModal
        deleteVisible={deleteVisible}
        setDeleteVisible={setDeleteVisible}
        type={type}
        id={content.id}
      />
    </>
  );
};

export default ActivityCard;
