import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';


import './Nav.css'; 
import './SideBar.css';


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
          <div className="nav-submenu">
             <ul>
                 <li>Beauty</li>
                 <li>Cosmetic</li>
                 <li>Personal Care</li>
             </ul>
         </div>

         <SideBar/>
        </>
    )
}

export default Nav
