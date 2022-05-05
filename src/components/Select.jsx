import React from "react";

import "../styles/Select.css";

const Select = () => {
  return (
    <ul className='select'>
      <li className='option'>Africa</li>
      <li className='option'>America</li>
      <li className='option'>Asia</li>
      <li className='option'>Europe</li>
      <li className='option'>Oceania</li>
      {/* <option value='all'>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option> */}
    </ul>
  );
};

export default Select;
