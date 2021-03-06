import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import Error from "./Error";

const BorderLink = ({ borderCode }) => {
  const { data, loading, error } = useFetch(
    `https://restcountries.com/v2/alpha/${borderCode}`
  );

  if (error) {
    return <Error error={error} />;
  } else if (loading) {
    return <Spinner />;
  } else if (data) {
    const urlCountry = data.name.split(" ").join("-");
    return (
      <Link to={`/countries-rest-api/country/${urlCountry}`}>
        <button className='btn'>{data.name}</button>
      </Link>
    );
  }
};

export default BorderLink;
