import * as React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
function NavBar(){
    return(
        <nav className="navbar">
            <img
          src={require("../assets/nav-logo.png")}
          alt="Little Lemon logo"
          className="nav-image"
        ></img>
             <ul>
        <li>
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="a">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Login
          </Link>
        </li>
      </ul>
        </nav>
    )
}
export default  NavBar;