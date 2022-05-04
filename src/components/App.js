import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Countries from "../routes/Countries";
import Country from "../routes/Country";

import "../styles/App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Countries />} />
          <Route exact path=':countryName' element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
