import { useParams } from 'react-router-dom'


function CountryDetails({countries}) {
    const { countryId } = useParams();
    const country = countries.find((a) => a.alpha3code === countryId);
console.log(countries)

    return (
        <div>  
            <h1>{country.name.common}</h1>
            <h2>{country.alpha2code}</h2>
            <p>Region: {country.region}</p>
            <p>Languages: {country.languages.nld}</p>
            <p>Currencies: {country.currencies.AWG.name}</p>
            <p></p>
        </div>
    )}
    
  
  export default CountryDetails;
