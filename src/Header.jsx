import React, { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as moonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as moonOutline } from "@fortawesome/free-regular-svg-icons";
import "./Header.css";
import { useLocalStorageState } from "./utils/hooks";

library.add(moonSolid, moonOutline);

const Header = () => {
  const [mode, setMode] = useLocalStorageState("dark-mode", "light");
  useEffect(() => {
    setDocumentTheme(mode);
  }, [mode]);

  const darkModeToggleHandler = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setDocumentTheme = (mode) => {
    document.documentElement.className = mode;
  };
  return (
    <header className='header'>
      <h1 className='title'>Where in the world?</h1>
      <button className='theme-toggle' onClick={darkModeToggleHandler}>
        {mode === "dark" && <FontAwesomeIcon icon='fa-solid fa-moon' />}
        {mode === "light" && <FontAwesomeIcon icon='fa-regular fa-moon' />}
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
