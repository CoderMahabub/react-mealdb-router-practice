import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink className="nav-item" to="/restaurant" activeStyle={{ textDecoration: "underline", color: "red" }}>Home</NavLink>
            <NavLink className="nav-item" to="/contact" activeStyle={{ textDecoration: "underline", color: "red" }}>Contact</NavLink>
            <NavLink className="nav-item" to="/about" activeStyle={{ textDecoration: "underline", color: "red" }}>About</NavLink>
        </div>
    );
};

export default Header;