import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/Search.css";

library.add(faMagnifyingGlass);

const Search = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const onSearchTextChangeHandler = (ev) => {
    setSearchText(ev.target.value);
  };

  const onEnterHandler = (ev) => {
    if (ev.code === "Enter" && searchText.length > 0) {
      ev.target.blur();
      setSearchText("");
      navigate(`/search-results/${searchText}`);
    }
  };

  return (
    <div className='search'>
      <FontAwesomeIcon
        icon='fa-solid fa-magnifying-glass'
        className='search-icon'
      />
      <input
        type='text'
        placeholder='Search for a country...'
        className='search-input'
        onKeyDown={onEnterHandler}
        value={searchText}
        onChange={onSearchTextChangeHandler}
      />
    </div>
  );
};

export default Search;
