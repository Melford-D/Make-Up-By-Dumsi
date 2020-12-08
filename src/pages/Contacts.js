import React from 'react'
import { Link } from 'react-router-dom';
import './Contacts.css';
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


const Contacts = () => {
    return (
        <>
        <section className="contacts-page" style={{textDecoration: "none", color: "#000"}}>
            <Link to="/contacts">
                <h1>Contacts:</h1>
                <div className="contacts-container">
                    <ul className="contact-items">
                        <li className="contact-item social-icon">
                           <CallIcon/>
                        </li>
                        <li className="contact-item">07033482275,</li>
                        <li className="contact-item">07081134750</li>
                        <li className="contact-item">
                          <EmailIcon/>
                        </li>
                        <li className="contact-item">makeupbydumsi@gmail.com</li>
                    </ul>
                    <hr/>
                    <ul className="contact-items-icons">
                        <li className="contact-item-icon">
                            <a href="https://www.instagram.com/makeupbydumsi/"  target="_blank" className="social-icons">
                                <InstagramIcon/>
                            </a>
                        </li>
                        <li className="contact-item-icon">
                           <a href="https://web.facebook.com/Dumsi.Birakor" className="social-icons">
                               <FacebookIcon/>
                           </a>
                        </li>
                        <li className="contact-item-icon">
                            <a href="" className="social-icons">
                                <WhatsAppIcon/>
                            </a>
                        </li>
                    </ul>

                <div className="map-container">
                     <iframe className="google-map" width="300" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=No%207%20Kusimo%20street%20opposite%20The%20Chicken%20Republic%20Aguda%20Surulere%20Lagos+(My%20Business%20Address)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
                 </div>
                </div>
            </Link>
        </section>
        </>
    )
}

export default Contacts
