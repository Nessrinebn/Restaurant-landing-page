import * as React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
      <div className="navbar">
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
      <div/>
    )
}
export default  NavBar;