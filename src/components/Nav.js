import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/nav.css'

const Nav = () => {

    return (
        <div className="navBar container">
            <button 
                type="button"
                class="btn btn-secondary"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>

            <div 
                className="nav nav-pills flex-column flex-sm-row"
            >
                <NavLink 
                    to="/" 
                    className="flex-sm-fill text-sm-center nav-link" 
                    activeClassName="active" 
                    exact
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/Skills"
                    className="flex-sm-fill text-sm-center nav-link"
                >
                    Skills
                </NavLink>
                <NavLink 
                    to="/Portfolio"
                    className="flex-sm-fill text-sm-center nav-link"
                >
                    Portfolio
                </NavLink>
                <NavLink 
                    to="/Contact"
                    className="flex-sm-fill text-sm-center nav-link"
                >
                    Contact
                </NavLink>
            </div>
            
            

        </div>
    );
};

export default Nav;