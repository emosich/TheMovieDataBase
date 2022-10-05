import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return(

<nav className="navbar has-background-black-ter mb-4">
<NavLink to="/"><strong><h3 className="navbar-item has-text-white">THE MOVIE DATA BASEEE</h3></strong></NavLink>


    <div className="login">
        <NavLink to="login"><strong>Log in</strong></NavLink>
    </div>

    <div className="login">
    <NavLink to="register"><strong>Register</strong></NavLink>
    </div>

</nav>
)};

export default Navbar 