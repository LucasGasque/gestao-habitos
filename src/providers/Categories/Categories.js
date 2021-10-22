import { createContext, useState } from "react";
import studyAvatar from "../../img/categoriesAvatars/study.png";
import dietAvatar from "../../img/categoriesAvatars/balanced-diet.png";
import mentalHealthAvatar from "../../img/categoriesAvatars/mental-health.png";
import healthAvatar from "../../img/categoriesAvatars/healthcare.png";
import sleepAvatar from "../../img/categoriesAvatars/sleeping.png";
import economyAvatar from "../../img/categoriesAvatars/piggy-bank.png";
import socialInteractionAvatar from "../../img/categoriesAvatars/talking.png";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    "Estudo",
    "Alimentação",
    "Saúde Mental",
    "Saúde",
    "Sono",
    "Economia",
    "Interação Social",
  ]);

  const [categoriesPictures, setCategoriesPictures] = useState({
    Estudo: studyAvatar,
    Alimentação: dietAvatar,
    "Saúde Mental": mentalHealthAvatar,
    Saúde: healthAvatar,
    Sono: sleepAvatar,
    Economia: economyAvatar,
    "Interação Social": socialInteractionAvatar,
  });

  return (
    <CategoriesContext.Provider value={{ categories, categoriesPictures }}>
      {children}
    </CategoriesContext.Provider>
  );
};
