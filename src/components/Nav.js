import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/nav.css'

const Nav = () => {



    return (
        <nav className="navBar navbar navbar-expand-md  bg-light rounded-bottom">
            {/* nav nav-pills flex-column flex-sm-row  */}
            <div className="container-fluid">
                <button 
                    type="button"
                    class="btn btn-outline-dark navbar-toggler"
                    data-bs-toggle="collapse" 
                    data-bs-target="#navCollapse" 
                    aria-controls="navCollapse" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div 
                    className="nav-pills flex-colum flex-sm-row collapse navbar-collapse"
                    id="navCollapse" collapseOnSelect
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
                        to="/skills"
                        className="flex-sm-fill text-sm-center nav-link"
                    >
                        Skills
                    </NavLink>
                    <NavLink 
                        to="/portfolio"
                        className="flex-sm-fill text-sm-center nav-link"
                    >
                        Portfolio
                    </NavLink>
                    <NavLink 
                        to="/contact"
                        className="flex-sm-fill text-sm-center nav-link"
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            
        </nav>
    );
};

export default Nav;