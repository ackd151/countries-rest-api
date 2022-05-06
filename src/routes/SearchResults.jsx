import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import CountryCard from "../components/CountryCard";
import NoResults from "../components/NoResults";
import useFetch from "../hooks/useFetch";

const SearchResults = ({ filterVal }) => {
  const { query } = useParams();

  console.log(filterVal);

  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/name/${query}`
  );

  if (error) {
    return <NoResults query={query} />;
  } else if (loading) {
    return <Spinner />;
  } else if (data) {
    return (
      <div className='search-results countries'>
        {data.map(
          (country) =>
            (country.region.toUpperCase() === filterVal.toUpperCase() && (
              <CountryCard key={country.cca3} country={country} />
            )) ||
            (filterVal === "all" && (
              <CountryCard key={country.cca3} country={country} />
            ))
        )}
      </div>
    );
  }
};
export default SearchResults;
