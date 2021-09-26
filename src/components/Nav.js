import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <div 
            className="navBar ui large tabular fluid four item menu"
            style={{marginTop: "33px"}}
        >
            <NavLink 
                to="/" 
                className="item" 
                activeClassName="active" 
                exact
            >
                Home
            </NavLink>
            <NavLink 
                to="/Skills"
                className="item"
            >
                Skills
            </NavLink>
            <NavLink 
                to="/Portfolio"
                className="item"
            >
                Portfolio
            </NavLink>
            <NavLink 
                to="/Contact"
                className="item"
            >
                Contact
            </NavLink>
        </div>

    );
};

export default Nav;