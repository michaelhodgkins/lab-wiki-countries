// import data from '../countries.json';
import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function CountryList() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios   
        .get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
            console.log(response.data)
            setCountries(response.data)
        })
    })

    return (
    <div>
        {countries.map(country => {
            return (
                <div key={country.alpha3Code}>
                    <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>

                </div>
            )
        })}
    </div>
        )}
  
  export default CountryList;
