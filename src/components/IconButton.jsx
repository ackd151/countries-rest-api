import React from "react";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/IconButton.css";

const IconButton = ({ icon, path, text }) => {
  library.add(icon);
  const navigate = useNavigate();

  return (
    <button className='btn nav-btn' onClick={() => navigate(path)}>
      <FontAwesomeIcon icon={icon} />
      {text}
    </button>
  );
};

export default IconButton;
