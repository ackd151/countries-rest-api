import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";

const BorderLink = ({ borderCode }) => {
  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/alpha/${borderCode}`
  );

  if (error) {
    return <div className='error'>Error: {error.message}</div>;
  } else if (loading) {
    return <Spinner />;
  } else if (data) {
    console.log(loading);
    console.log(error);
    console.log(data);
    const urlCountry = data[0].name.common.split(" ").join("-");
    console.log(urlCountry);
    return (
      <Link to={`/${urlCountry}`}>
        <button className='btn'>{data[0].name.common}</button>
      </Link>
    );
  }
};

export default BorderLink;
