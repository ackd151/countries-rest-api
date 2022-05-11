import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import Countries from "../routes/Countries";
import Country from "../routes/Country";
import SearchResults from "../routes/SearchResults";
import Footer from "./Footer";

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
              element={<Navigate replace to='/countries-rest-api/countries' />}
            />
            <Route
              exact
              path='/countries-rest-api'
              element={<Navigate replace to='/countries-rest-api/countries' />}
            />
            <Route
              exact
              path='/countries-rest-api/countries'
              element={
                <Countries
                  filterVis={handleFilterVis}
                  searchVis={handleSearchVis}
                />
              }
            />
            <Route
              exact
              path='/countries-rest-api/countries/:region'
              element={
                <Countries
                  filterVis={handleFilterVis}
                  searchVis={handleSearchVis}
                />
              }
            />
            <Route
              exact
              path='/countries-rest-api/country/:countryName'
              element={
                <Country
                  filterVis={handleFilterVis}
                  searchVis={handleSearchVis}
                />
              }
            />
            <Route
              exact
              path='/countries-rest-api/search-results/:query'
              element={
                <SearchResults
                  filterVal={filterVal}
                  filterVis={handleFilterVis}
                  searchVis={handleSearchVis}
                />
              }
            />
            {/* Catch-all, mostly for redirect when requesting specific route without spa running in client already */}
            <Route path='/*' element={<Navigate replace to='/' />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
