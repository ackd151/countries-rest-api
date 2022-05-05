import React from "react";
import { Link } from "react-router-dom";
import "../styles/CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/${country.name}`}>
      <div className='country-card'>
        <img
          src={country.flag}
          alt={`${country.name}'s national flag`}
          className='flag'
        />
        <div className='country_info'>
          <div className='country_name'>{country.name}</div>
          <div className='country_pop'>
            Population:{" "}
            <span className='stat'>
              {country.population.toLocaleString("en-US")}
            </span>
          </div>
          <div className='country_region'>
            Region: <span className='stat'>{country.region}</span>
          </div>
          <div className='county_capital'>
            Capital: <span className='stat'>{country.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;