import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Select from "./Select";

import "../styles/Filter.css";

const Filter = ({ onFilterSelect }) => {
  const navigate = useNavigate();

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

  const filterSelected = (region) => {
    // If currently at '/countries' we want all by selected region -> simply navigate to '/countries/:region'
    // Else we are in '/countries/results' and we want to filter only the subset obtained via the search
    if (window.location.pathname.split("/").includes("search-results")) {
      onFilterSelect(region);
    } else {
      navigate(`/countries/${region}`);
    }
    setFilterVis(false);
  };

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
        <Select isFocused={filterVis} onFilterSelect={filterSelected} />
      )}
    </div>
  );
};

export default Filter;
