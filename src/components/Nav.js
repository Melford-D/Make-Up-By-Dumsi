import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/logo.png';

const Nav = () => {
    return (
        <nav>
            <div className="logo">
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
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Contact</li>
            </ul>
            <div className="nav-icon">
                <MenuIcon/>
            </div>
        </nav>
    )
}

export default Nav
