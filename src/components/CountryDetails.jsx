import { useParams } from 'react-router-dom'

function CountryDetails({countries}) {
    const { countryId } = useParams();
    const country = countries.find((a) => a.alpha3code === countryId);
console.log(country)

    return (
        <div>  
            <h1>Details</h1>
            <p>{country}</p>
        </div>
    )}
    
  
  export default CountryDetails;
