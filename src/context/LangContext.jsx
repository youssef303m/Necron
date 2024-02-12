import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useLangContext = () => useContext(GlobalContext);

const LanguageContext = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "ar");
  return (
    <GlobalContext.Provider value={{ lang, setLang }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default LanguageContext;
