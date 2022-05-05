import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import Countries from "../routes/Countries";
import Country from "../routes/Country";
import SearchResults from "../routes/SearchResults";

import "../styles/App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='search-and-filter'>
          <Search />
          <Filter />
        </div>
        <Routes>
          <Route exact path='/' element={<Countries />} />
          <Route exact path=':countryName' element={<Country />} />
          <Route exact path='/results/:query' element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
