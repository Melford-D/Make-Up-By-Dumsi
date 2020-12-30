import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './Nav.css'; 
import './MenuBar.css';


const Nav = () => {
    return (
        <>
        <nav>
            <div className="logo--section">
                <div className="logo-left">
                   <img src={Logo} alt="logo" />
                </div>
                <div className="logo-name">
                    <div className="logo-dumsi">
                        <Link to="/" className="logo-link" style={{textDecoration: "none"}}>
                        <h1>Dumsi</h1>
                        </Link>
                         <hr/>
                    </div>
                    <div className="logo-studio">   
                        <h2>makeup studio</h2>
                    </div>
                </div>
                 <div className="logo-right">
                   <img src={Logo} alt="logo" />
                </div>
            </div>
        </nav>
        <div className='menu-bar'>
            <div className='menu-bar-container'>
            <ul className="menu-bar-items">
                <li className="menu-bar-item">
                    <Link to="/" >Home</Link>
                </li>
                <li className="menu-bar-item">
                     <Link to="/about" >About</Link>
                </li>
                <li className="menu-bar-item">
                     <Link to="/services" >Services</Link>
                </li>
                <li className="menu-bar-item">
                     <Link to="/contacts" >Contact</Link>
                </li>
            </ul>
            </div>
        </div>

          <div className="nav-submenu">
             <ul>
                 <li>Beauty</li>
                 <li>Cosmetic</li>
                 <li>Personal Care</li>
             </ul>
         </div>
        </>
    )
}

export default Nav
