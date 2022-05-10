import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/Search.css";

library.add(faMagnifyingGlass);

const Search = () => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const [searchText, setSearchText] = useState("");

  const onSearchTextChangeHandler = (ev) => {
    setSearchText(ev.target.value);
  };

  const keyDownHandler = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      submitSearchHandler();
    }
  };

  const submitSearchHandler = () => {
    const query = searchText;
    if (query.length > 0) {
      setSearchText("");
      searchRef.current.blur();
      navigate(`/countries-rest-api/search-results/${query}`);
    }
  };

  return (
    <div className='search'>
      <div className='icon-wrap' onClick={submitSearchHandler}>
        <FontAwesomeIcon
          icon='fa-solid fa-magnifying-glass'
          className='search-icon'
        />
      </div>
      <form action='#'>
        <input
          type='text'
          placeholder='Search for a country...'
          className='search-input'
          onKeyDown={keyDownHandler}
          ref={searchRef}
          value={searchText}
          onChange={onSearchTextChangeHandler}
        />
        <button className='no-vis' type='submit' />
      </form>
    </div>
  );
};

export default Search;
