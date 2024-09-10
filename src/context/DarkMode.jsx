import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkMode = (props) => {
  const { children } = props;
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext };
export default DarkMode;
