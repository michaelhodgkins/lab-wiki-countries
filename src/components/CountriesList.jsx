import data from '../countries.json';

import { Link } from "react-router-dom";

function CountryList({countries}) {
    return (
    <div>
        {data.map(country => {
            return (
                <div key={country.alpha3Code}>
                    <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>

                </div>
            )
        })}
    </div>
        )}
  
  export default CountryList;
