import React, {useEffect, useState} from 'react';
import './SideBar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';



const SideBar = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
   
    const handleOpenMenu = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }
    useEffect(()=> {
        handleOpenMenu();
    },[])
   
    return (
        <>
        <div className="menu">
            <Link to='#' className="menu-icon">
                <MenuIcon onClick={handleOpenMenu}/>
            </Link>
        </div>
           
        <div className='side-bar'>
            <div className='side-bar-container' onClick={handleOpenMenu}>
            <ul className={isSideBarOpen ? "side-bar-items active" : "side-bar-items"}>
                <li className="side-bar-item" >
                   <Link to ='#'  className="side-bar-close-icon">
                      <CloseIcon />
                   </Link>
                </li>
                <li className="side-bar-item">
                    <Link to="/" >Home</Link>
                </li>
                <li className="side-bar-item">
                     <Link to="/about" >About</Link>
                </li>
                <li className="side-bar-item">
                     <Link to="/services" >Services</Link>
                </li>
                <li className="side-bar-item">
                     <Link to="/contacts" >Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default SideBar
