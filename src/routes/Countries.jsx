import React from "react";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import CountryCard from "../components/CountryCard";

const Countries = () => {
  const {
    data: countries,
    loading,
    error,
  } = useFetch("https://restcountries.com/v2/all");

  if (error) {
    return <div className='error'>Error</div>;
  } else if (loading) {
    return <Spinner />;
  } else if (countries) {
    return (
      <main className='main-content'>
        {countries &&
          countries.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
      </main>
    );
  }
};

export default Countries;
