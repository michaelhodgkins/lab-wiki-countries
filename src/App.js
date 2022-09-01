import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails";
import Navbar from './components/Navbar';
import data from './countries.json';

console.log(data);


function App() {
  return <div className="App">
    <Navbar />
    <Routes>
       <Route exact path='/' element={<CountriesList country={data} />}/>
       <Route path="/:id" element={ <CountryDetails country={data} /> } />
    </Routes>

  </div>;
}
export default App;
