import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as moonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as moonOutline } from "@fortawesome/free-regular-svg-icons";
import "./Header.css";

library.add(moonSolid, moonOutline);

const Header = () => {
  return (
    <header className='header'>
      <h1 className='title'>Where in the world?</h1>
      <div className='theme'>
        <FontAwesomeIcon icon='fa-solid fa-moon' />
        <FontAwesomeIcon icon='fa-regular fa-moon' />
        <button className='theme-toggle'>Dark Mode</button>
      </div>
    </header>
  );
};

export default Header;
