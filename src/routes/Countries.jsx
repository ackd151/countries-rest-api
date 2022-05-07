import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import CountryCard from "../components/CountryCard";
import { useParams } from "react-router-dom";

const Countries = ({ filterVis, searchVis }) => {
  const { region } = useParams();
  const url = region
    ? `https://restcountries.com/v3.1/region/${region}`
    : "https://restcountries.com/v3.1/all";

  const { data: countries, loading, error } = useFetch(url);
  useEffect(() => {
    searchVis(true);
    filterVis(true);
  }, [searchVis, filterVis]);

  if (error) {
    return <div className='error'>Error</div>;
  } else if (loading) {
    return <Spinner />;
  } else if (countries) {
    return (
      <div className='countries'>
        {countries &&
          countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
      </div>
    );
  }
};

export default Countries;
