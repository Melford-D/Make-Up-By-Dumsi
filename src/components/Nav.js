import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

import './Nav.css'; 


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleOpenMenu = () => {
        console.log('menu is open');   
        setIsMenuOpen(true);
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
