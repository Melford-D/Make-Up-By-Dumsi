import React, {useState} from 'react';
import './SideBar.css'
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';



const SideBar = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
   
    const handleCloseMenu = () => {
        console.log('menu is close');
        setIsSideBarOpen(false);
    }
    return (
        <div className='side-bar'>
            <div className={isSideBarOpen ? 'side-bar-container active' : 'side-bar-container'}>
            <ul className="side-bar-items">
                 <Link to ='#'  className="side-bar-close-icon">
                      <CloseIcon 
                      onClick={handleCloseMenu}/>
                </Link>
                <li className="side-bar-item">Home</li>
                <li className="side-bar-item">About</li>
                <li className="side-bar-item">Services</li>
                <li className="side-bar-item">Contact</li>
            </ul>
            </div>
        </div>
    )
}

export default SideBar
