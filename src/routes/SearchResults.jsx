import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import CountryCard from "../components/CountryCard";
import useFetch from "../hooks/useFetch";

const SearchResults = () => {
  const { query } = useParams();

  const { data, loading, error } = useFetch(
    `https://restcountries.com/v2/name/${query}`
  );

  if (error) {
    return <div className='no-results'>No results found for '{query}'</div>;
  } else if (loading) {
    return <Spinner />;
  } else if (data) {
    return (
      <main className='search-results main-content'>
        {data.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </main>
    );
  }
};
export default SearchResults;
