// src/components/Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
    <p>LAB - WikiCountries</p>
    <ul>
        <Link to='/'> Home </Link> 
        <br>
        </br>
        <Link to="/list"> List </Link>  
               
      </ul>
    </nav>
  );
}

export default Navbar;
