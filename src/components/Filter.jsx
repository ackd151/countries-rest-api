import React, { useState, useRef } from "react";
import Select from "./Select";

import "../styles/Filter.css";

const Filter = ({ onFilterSelect }) => {
  const [filterVis, setFilterVis] = useState(false);
  const toggleVisOnKey = (ev) => {
    console.log(ev.keyCode);
    if (ev.keyCode === 13 || ev.keyCode === 32) {
      ev.preventDefault();
      setFilterVis(!filterVis);
    }
  };

  /* Handle close options on click outside */
  const optionsRef = useRef();
  const closeSelectElement = (ev) => {
    if (
      optionsRef.current &&
      filterVis &&
      !optionsRef.current.contains(ev.target)
    ) {
      setFilterVis(false);
    }
  };
  document.addEventListener("mousedown", closeSelectElement);
  /* end - click outside */

  return (
    <div
      className='filter'
      tabIndex={0}
      onKeyDown={toggleVisOnKey}
      ref={optionsRef}
    >
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
      {filterVis && (
        <Select isFocused={filterVis} onFilterSelect={onFilterSelect} />
      )}
    </div>
  );
};

export default Filter;
