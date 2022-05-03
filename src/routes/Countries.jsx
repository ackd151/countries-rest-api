import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import CountryCard from "../components/CountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setCountries(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className='error'>Error: {error.message}</div>;
  } else if (!loaded) {
    return <Spinner />;
  } else {
    return (
      <main className='main-content'>
        {countries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </main>
    );
  }
};

export default Countries;
