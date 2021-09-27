import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/nav.css'

const Nav = () => {

    return (
        <div className="ui container">
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

            <div class="ui vertical inverted sidebar menu">
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
        </div>
    );
};

export default Nav;