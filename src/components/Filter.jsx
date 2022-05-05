import React from "react";

import "../styles/Filter.css";

const Filter = () => {
  return (
    <div className='filter'>
      {/* <label htmlFor='filter'>Filter by Region</label> */}
      <select name='filter' id='filter'>
        <option value='all'>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
