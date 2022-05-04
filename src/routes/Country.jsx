import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import BorderLink from "../components/BorderLink";
import { bestMatch } from "../utils/bestMatch";
import "../styles/Country.css";

const Country = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const reUrlifiedName = countryName.split("-").join(" ");

  const {
    data: countryResults,
    loading,
    error,
  } = useFetch(`https://restcountries.com/v2/name/${reUrlifiedName}`);

  if (error) {
    console.log("ERROR");
    return <Error error={error} />;
  } else if (loading) {
    return <Spinner />;
  } else if (countryResults) {
    // Need to wait for async useFetch hook
    // testing, closest match is last in results array - big nope
    console.log(countryResults);
    const country = bestMatch(countryName, countryResults);
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
                    <span key={lang.name} className='stat'>
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
                  country.borders.map((borderCode) => (
                    <BorderLink key={borderCode} borderCode={borderCode} />
                  ))) || <span className='empty-set'>none</span>}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Country;
