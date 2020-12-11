import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';



const Services = () => {
    return (
        <div>
            <Link to="/services" />
                <section className="services-page">
                    <ul>
                        <li>makeup artist</li>
                        <li>consultant</li>
                        <li>beauty artist</li>
                        <li>makeup class</li>
                    </ul>
                </section>
        </div>
    )
}

export default Services
