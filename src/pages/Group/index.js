import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GroupContext } from "../../providers/Group/Group";
import MenuBar from "../../components/MenuBar";
import {
  CardListContainer,
  Container,
  Content,
  DesktopContainer,
  ImgContainer,
} from "./style";
import { CategoriesContext } from "../../providers/Categories/Categories";
import { Button } from "@material-ui/core";
import ModalityContainer from "../../components/ModalityContainer";
import CardsList from "../../components/CardsList";
import { BsFillGearFill } from "react-icons/bs";
import { LoginContext } from "../../providers/Login/Login";
import { Redirect } from "react-router-dom";
import AddNewCard from "../../components/AddNewCard";
import EditGroup from "../../components/EditGroup";

const Group = () => {
  const { id } = useParams();
  const { getGroup, selectedGroup, setEditGroupVisible } = useContext(GroupContext);
  const { categoriesPictures } = useContext(CategoriesContext);
  const { userId, authenticated } = useContext(LoginContext);
  const { subscribeGroup, unsubscribeGroup } = useContext(GroupContext);
  const [isSub, setIsSub] = useState(
    selectedGroup?.users_on_group.some((user) => user.id === userId)
  );
  const [isCreator, setIsCreator] = useState(
    selectedGroup?.creator.id === userId
  );

  useEffect(() => {
    if (selectedGroup?.users_on_group.some((user) => user.id === userId)) {
      setIsSub(true);
    }
    if (selectedGroup?.creator.id === userId) {
      setIsCreator(true);
    }
  }, [selectedGroup]);

  const handleSubscribe = () => {
    subscribeGroup(id);
    setIsSub(true);
  };
  const handleUnsubscribe = () => {
    unsubscribeGroup(id);
    setIsSub(false);
  };

  useEffect(() => {
    getGroup(id);
  }, []);

  if (!authenticated) return <Redirect to="/login" />;

  console.log(
    categoriesPictures[selectedGroup?.category] === undefined
      ? "undefined"
      : "não undefined"
  );

  return (
    <>
      <Container>
        <DesktopContainer isCreator={isCreator}>
          <div>
            <div>
              <img
                src={
                  categoriesPictures[selectedGroup?.category] === undefined
                    ? categoriesPictures["Estudo"]
                    : categoriesPictures[selectedGroup.category]
                }
                alt={selectedGroup?.category}
              />
            </div>
            <h3>{selectedGroup?.name}</h3>
          </div>
          {isCreator && <BsFillGearFill size="1.5em" onClick={()=> setEditGroupVisible(true)}/>}
        </DesktopContainer>
        <ImgContainer>
          <img
            src={
              categoriesPictures[selectedGroup?.category]
                ? categoriesPictures[selectedGroup?.category]
                : categoriesPictures.estudo
            }
            alt={selectedGroup?.category}
          />
        </ImgContainer>
        {!isCreator && 
          <BsFillGearFill 
            size="1.5em" 
          />}
      </Container>
      <Content>
        <h3>{selectedGroup?.name}</h3>
        {isSub ? (
          <Button
            onClick={handleUnsubscribe}
            variant="outlined"
            color="primary"
          >
            Sair
          </Button>
        ) : (
          <Button
            onClick={handleSubscribe}
            size="small"
            variant="contained"
            color="primary"
          >
            Inscrever-se
          </Button>
        )}
        <p>{selectedGroup?.description}</p>
      </Content>
      <CardListContainer>
        <ModalityContainer pageType="Group" title="Objetivos">
          <CardsList type="goal" pageType="group" groupData={selectedGroup}>
            {isSub && <AddNewCard type="goal" />}
          </CardsList>
        </ModalityContainer>
        <ModalityContainer pageType="Group" title="Atividades">
          <CardsList type="activity" pageType="group" groupData={selectedGroup}>
            {isSub && <AddNewCard type="activity" />}
          </CardsList>
        </ModalityContainer>
      </CardListContainer>
      <MenuBar />
      <EditGroup />
    </>
  );
};

export default Group;
