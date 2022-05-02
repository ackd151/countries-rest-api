import React, { useEffect, useState } from "react";
import Header from "./Header";
import CountryCard from "./CountryCard";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          console.log(result);
          setCountries(result);
        },
        (error) => {
          setLoaded(true);
          console.log(error);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className='error'>Error: {error.message}</div>;
  } else if (!loaded) {
    return <div className='loading'>Loading...</div>;
  } else {
    return (
      <div className='App'>
        <Header />
        <main className='main-content'>
          {countries.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
