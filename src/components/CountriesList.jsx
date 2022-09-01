import { Link } from "react-router-dom";

function CountryList({country}) {
    return (
    <div>
        {country.map(single => {
            return (
                <div key={single.alpha3Code}>
                    <Link to={`/${single.alpha3Code}`}>{single.name.common}</Link>

                </div>
            )
        })}
    </div>
        )}
  
  export default CountryList;




