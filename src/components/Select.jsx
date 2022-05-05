import React, { useEffect, useRef } from "react";

import "../styles/Select.css";

const Select = ({ isFocused, onFilterSelect }) => {
  const firstOption = useRef();

  useEffect(() => {
    firstOption.current.focus();
  }, [isFocused]);

  return (
    <ul className='select'>
      <li
        className='option'
        tabIndex={0}
        ref={firstOption}
        onClick={() => onFilterSelect("africa")}
      >
        Africa
      </li>
      <li
        className='option'
        tabIndex={0}
        onClick={() => onFilterSelect("america")}
      >
        America
      </li>
      <li
        className='option'
        tabIndex={0}
        onClick={() => onFilterSelect("asia")}
      >
        Asia
      </li>
      <li
        className='option'
        tabIndex={0}
        onClick={() => onFilterSelect("europe")}
      >
        Europe
      </li>
      <li
        className='option'
        tabIndex={0}
        onClick={() => onFilterSelect("oceania")}
      >
        Oceania
      </li>
    </ul>
  );
};

export default Select;
