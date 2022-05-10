import React, { useEffect, useRef, useState } from "react";

import "../styles/Select.css";

const Select = ({ isOpen, onFilterSelect, toggleVis, ariaLabel }) => {
  const [selected, setSelected] = useState(0);
  const filters = ["africa", "americas", "asia", "europe", "oceana", "all"];

  const list = useRef();

  useEffect(() => {
    list.current.children[selected].focus();
  }, [isOpen, selected]);

  const keyDownHandler = (ev) => {
    ev.preventDefault();
    switch (ev.keyCode) {
      case 27:
        toggleVis(ev);
        break;
      case 40:
        setSelected((prev) => (prev + 1) % filters.length);
        break;
      case 38:
        setSelected((prev) => {
          return prev === 0 ? filters.length - 1 : prev - 1;
        });
        break;
      case 13:
        onFilterSelect(filters[selected]);
        break;
      default:
        break;
    }
  };

  return (
    <ul
      className='select'
      onKeyDown={keyDownHandler}
      id='list'
      ref={list}
      aria-label={ariaLabel}
    >
      {filters.map((filter) => (
        <li
          className='option'
          key={filter}
          tabIndex={0}
          onClick={() => onFilterSelect(filter)}
        >
          {filter}
        </li>
      ))}
    </ul>
  );
};

export default Select;
