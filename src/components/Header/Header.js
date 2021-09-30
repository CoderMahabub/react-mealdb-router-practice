import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink className="nav-link" to="/home" activeStyle={{ textDecoration: "underline", color: "red" }}>Home</NavLink>
            <NavLink className="nav-link" to="/meals" activeStyle={{ textDecoration: "underline", color: "red" }}>Meals</NavLink>
            <NavLink className="nav-link" to="/about" activeStyle={{ textDecoration: "underline", color: "red" }}>About</NavLink>
        </div>
    );
};

export default Header;