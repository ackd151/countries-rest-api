import React from "react";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <div className='country-card'>
      <img
        src={country.flag}
        alt={`${country.name}'s national flag`}
        className='flag'
      />
      <div className='country_info'>
        <div className='country_name'>{country.name}</div>
        <div className='country_pop'>Population: {country.population}</div>
        <div className='country_region'>Region: {country.region}</div>
        <div className='county_capital'>Capital: {country.capital}</div>
      </div>
    </div>
  );
};

export default CountryCard;
