import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/logo.png';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

import './Nav.css'; 


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleOpenMenu = () => {
        console.log('menu is open');
        
        setIsMenuOpen(true);
    }
    const handleCloseMenu = () => {
        console.log('menu is close');
        
        setIsMenuOpen(false);
    }
    return (
        <>
        <nav>
            <div className="logo--section">
                <div className="logo-left">
                   <img src={Logo} alt="logo" />
                </div>
                <div className="logo-name">
                    <div className="logo-dumsi">
                        <h1>Dumsi</h1>
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
              
            <div className={isMenuOpen ? 'nav-items-container active' : 'nav-items-container'}>
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Contact</li>
            </ul>
                <Link to ='#'  className="nav-close-icon">
                      <CloseIcon 
                      onClick={handleCloseMenu}/>
                </Link>
            </div>
            <Link to='#' className="nav-menu-icon">
                <MenuIcon onClick={handleOpenMenu}/>
            </Link>
        </nav>
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
