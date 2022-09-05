import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const CountryDetails = () => {
    const { countryId } = useParams();
    const [country, setCountry] = useState({})

    useEffect(() => {
        axios   
        .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((response) => {
            console.log(response.data)
            setCountry(response.data)
        })
    } , [countryId]);

    return (
        <div>  
            <h1>{country.name}</h1>
            {/* <h2>{country.alpha2code}</h2>
            <p>Region: {country.region}</p>
            <p>Languages: {country.languages}</p>
            <p>Currencies: {country.currencies.name}</p> */}
            <p></p>
        </div>
    )}
    
  
  export default CountryDetails;
