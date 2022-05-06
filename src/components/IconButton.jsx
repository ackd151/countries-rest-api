import React from "react";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faHouse } from "@fortawesome/free-solid-svg-icons";

import "../styles/IconButton.css";

library.add(faArrowLeftLong, faHouse);

const IconButton = ({ icon, path, text }) => {
  const navigate = useNavigate();

  return (
    <button className='btn nav-btn' onClick={() => navigate(path)}>
      {icon === "back" ? (
        <FontAwesomeIcon icon='fa-solid fa-arrow-left-long' />
      ) : (
        <FontAwesomeIcon icon='fa-solid fa-house' />
      )}{" "}
      {text}
    </button>
  );
};

export default IconButton;
