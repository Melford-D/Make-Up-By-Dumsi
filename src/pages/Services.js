import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';



const Services = () => {
    return (
        <div>
            <Link to="/services" style={{textDecoration: "none", color: "#000"}}>
                <h1>hello from services</h1>
            </Link>
        </div>
    )
}

export default Services
