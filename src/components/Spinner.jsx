import React from "react";

import logo from "../assets/logo.svg";
import "../styles/Spinner.css";

const Spinner = () => {
  return (
    <div className='spinner-modal'>
      <img src={logo} alt='loading...' className='spinner' />
    </div>
  );
};

export default Spinner;
