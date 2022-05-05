import React, { useState } from "react";
import Select from "./Select";

import "../styles/Filter.css";

const Filter = () => {
  const [filterVis, setFilterVis] = useState(false);

  const toggleVisOnKey = (ev) => {
    console.log(ev.keyCode);
    if (ev.keyCode === 13 || ev.keyCode === 32) {
      ev.preventDefault();
      setFilterVis(!filterVis);
    }
  };

  return (
    <div className='filter' tabIndex={0} onKeyDown={toggleVisOnKey}>
      <div className='filter-element'>
        <span
          className='label'
          onClick={() => {
            setFilterVis(!filterVis);
          }}
        >
          Filter by Region
        </span>
      </div>
      {filterVis && <Select />}
    </div>
  );
};

export default Filter;
