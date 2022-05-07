import React, { useEffect } from "react";
import IconButton from "./IconButton";
import { faArrowLeftLong, faHouse } from "@fortawesome/free-solid-svg-icons";

import "../styles/NoResults.css";

const NoResults = ({ query }) => {
  //   useEffect(() => {
  //     filterVis(false);
  //   }, [filterVis]);

  return (
    <div className='no-results'>
      <div className='no-results_wrap'>
        <h2>No results found for "{query}"</h2>
      </div>
      <div className='nav-btns'>
        <IconButton icon={faArrowLeftLong} path={-1} text='Back' />
        <IconButton icon={faHouse} path={-1} text='Back' />
      </div>
    </div>
  );
};

export default NoResults;
