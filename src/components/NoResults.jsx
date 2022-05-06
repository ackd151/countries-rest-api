import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton";

import "../styles/NoResults.css";

const NoResults = ({ query }) => {
  const navigate = useNavigate();
  return (
    <div className='no-results'>
      <div className='no-results_wrap'>
        <h2>No results found for "{query}"</h2>
      </div>
      <div className='nav-btns'>
        <IconButton icon='back' path={-1} text='Back' />
        {/* <button className='btn nav-btn' onClick={() => navigate(-1)}>
          &larr; Back
        </button> */}
        <IconButton icon='home' path='/' text='Home' />
        {/* <button className='btn nav-btn' onClick={() => navigate("/")}>
          Home
        </button> */}
      </div>
    </div>
  );
};

export default NoResults;
