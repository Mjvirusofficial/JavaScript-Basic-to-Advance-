import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// import User from '../Auth/User';


function Navbar(props) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand logo" to="/"><h2>My Notes❤️</h2></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-lg-0 " >
                            <li className="nav-item abcd">
                            </li>
                            <li className="nav-item">
                            </li>
                 
                            <h3 className="nav-item">
                                <NavLink activeClassName='menu_active' className="nav-link active menu" to="/about"><p className='pages'>About me</p></NavLink>
                            </h3>

                            {/* <li className="nav-item">
                                <NavLink activeClassName='menu_active' className="nav-link active menu" to="/">{props.auth}</NavLink>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>

            <div className="user-detail">
                            <ul className='navbar-nav '>
                            <li className="nav-item">
                                <NavLink activeClassName='menu_active' className="nav-link active menu" to="/"></NavLink>
                                {/* <User/> before close Navbar */}
                            </li>
                            </ul>
                        </div>
        </div>
    )
}

export default Navbar;