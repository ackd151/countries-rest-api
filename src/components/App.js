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

  // Hide filter mechanism on non list page (i.e. /country/{country})
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterVis = (vis) => {
    setShowFilter(vis);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='search-and-filter'>
          <Search />
          {showFilter && <Filter onFilterSelect={filterSelectHandler} />}
        </div>
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
              element={<Countries filterVis={handleFilterVis} />}
            />
            <Route
              exact
              path='/countries/:region'
              element={<Countries filterVis={handleFilterVis} />}
            />
            <Route
              exact
              path='/country/:countryName'
              element={<Country filterVis={handleFilterVis} />}
            />
            <Route
              exact
              path='/search-results/:query'
              element={
                <SearchResults
                  filterVal={filterVal}
                  filterVis={handleFilterVis}
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
