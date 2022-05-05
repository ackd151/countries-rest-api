import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import Countries from "../routes/Countries";
import Country from "../routes/Country";
import SearchResults from "../routes/SearchResults";

import "../styles/App.css";

function App() {
  const [filterVal, setFilterVal] = useState("");
  const filterSelectHandler = (selected) => {
    console.log(selected);
    setFilterVal(selected);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='search-and-filter'>
          <Search />
          <Filter onFilterSelect={filterSelectHandler} />
        </div>
        <Routes>
          <Route exact path='/' element={<Countries filterVal={filterVal} />} />
          <Route exact path=':countryName' element={<Country />} />
          <Route
            exact
            path='/results/:query'
            element={<SearchResults filterVal={filterVal} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
