import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import "../styles/Country.css";

const Country = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${countryName}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setCountry(result[0]);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, [countryName]);

  if (error) {
    return <div className='error'>Error: {error.message}</div>;
  } else if (!loaded) {
    return <Spinner />;
  } else {
    return (
      <main className='country'>
        <button className='btn' onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        <div className='country-container'>
          <div className='country-flag_wrap'>
            <img
              src={country.flag}
              alt={`${country.name}'s national flag`}
              className='county-flag_img'
            />
          </div>
          <div className='country-details'>
            <h1 className='country-details_name'>{country.name}</h1>
            <div className='country-details_specs'>
              <div className='col-1'>
                <div className='spec'>
                  Native Name:{" "}
                  <span className='stat'>{country.nativeName}</span>
                </div>
                <div className='spec'>
                  Population:{" "}
                  <span className='stat'>
                    {country.population.toLocaleString("en-US")}
                  </span>
                </div>
                <div className='spec'>
                  Region: <span className='stat'>{country.region}</span>
                </div>
                <div className='spec'>
                  Sub Region: <span className='stat'>{country.subregion}</span>
                </div>
                <div className='spec'>
                  Capital: <span className='stat'>{country.capital}</span>
                </div>
              </div>
              <div className='col-2'>
                <div className='spec'>
                  Top Level Domain:{" "}
                  <span className='stat'>{country.topLevelDomain}</span>
                </div>
                <div className='spec'>
                  Currencies:{" "}
                  {country.currencies.map((cur) => (
                    <span key={cur.code} className='stat'>
                      {cur.name}
                    </span>
                  ))}
                </div>
                <div className='spec'>
                  Languages:{" "}
                  {country.languages.map((lang) => (
                    <span key={lang.iso639_1} className='stat'>
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className='border-countries'>
              <span className='label'>Border Countries: </span>
              <div className='border-countries_btns'>
                {(country.borders &&
                  country.borders.map((border) => (
                    <button key={border} className='btn'>
                      {border}
                    </button>
                  ))) ||
                  "None"}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Country;
