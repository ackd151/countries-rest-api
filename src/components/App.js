import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import Countries from "../routes/Countries";
import Country from "../routes/Country";
import SearchResults from "../routes/SearchResults";
import { usePath } from "../hooks/usePath";

import "../styles/App.css";

function App() {
  const [filterVal, setFilterVal] = useState("all");
  const filterSelectHandler = (selected) => {
    setFilterVal(selected);
  };

  // Hide search/filter mechanism on non list page (i.e. /country/{country})
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterVis = (vis) => {
    setShowFilter(vis);
  };
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchVis = (vis) => {
    setShowSearch(vis);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        {(showSearch || showFilter) && (
          <div className='search-and-filter'>
            {showSearch && <Search />}
            {showFilter && <Filter onFilterSelect={filterSelectHandler} />}
          </div>
        )}
        <main className='content'>
          <Routes>
            <Route
              exact
              path='/'
              element={<Navigate replace to='/countries' />}
            />
            <Route
              exact
              path='/countries'
              element={
                <Countries
                  filterVis={handleFilterVis}
                  searchVis={handleSearchVis}
                />
              }
            />
            <Route
              exact
              path='/countries/:region'
              element={
                <Countries
                  filterVis={handleFilterVis}
                  searchVis={handleSearchVis}
                />
              }
            />
            <Route
              exact
              path='/country/:countryName'
              element={
                <Country
                  filterVis={handleFilterVis}
                  searchVis={handleSearchVis}
                />
              }
            />
            <Route
              exact
              path='/search-results/:query'
              element={
                <SearchResults
                  filterVal={filterVal}
                  filterVis={handleFilterVis}
                  searchVis={handleSearchVis}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
