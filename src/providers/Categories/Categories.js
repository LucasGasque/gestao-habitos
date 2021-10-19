import { createContext, useState } from "react";

export const CategoriesContext = createContext();

export const ActivitiesProvieder = ({ children }) => {
  const [categories, setCategories] = useState([
    "Estudo",
    "Alimentação",
    "Saúde Mental",
    "Saúde",
    "Sono",
    "Economia",
    "Interação Social",
  ]);

  const [categoriesPictures, setCategoriesPictures] = useState({});

  return (
    <CategoriesContext.Provider value={{ categories, categoriesPictures }}>
      {children}
    </CategoriesContext.Provider>
  );
};
