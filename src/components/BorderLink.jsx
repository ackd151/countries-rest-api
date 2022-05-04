import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import Error from "./Error";

const BorderLink = ({ borderCode }) => {
  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/alpha/${borderCode}`
  );

  if (error) {
    return <Error error={error} />;
  } else if (loading) {
    return <Spinner />;
  } else if (data) {
    const urlCountry = data[0].name.common.split(" ").join("-");
    return (
      <Link to={`/${urlCountry}`}>
        <button className='btn'>{data[0].name.common}</button>
      </Link>
    );
  }
};

export default BorderLink;
