import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Error.css";

const Error = ({ error }) => {
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className='error'>
        <h1>Something went wrong...</h1>
        <div className='status'>Status: {error.status}</div>
        <div className='message'>Message: {error.statusText}</div>
        <button className='btn' onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default Error;
