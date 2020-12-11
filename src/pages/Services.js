import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';



const Services = () => {
    return (
        <div>
            <Link to="/services" />
                <section className="services-page">
                    <h1>Services</h1>
                    <ul>
                        <li>makeup artist</li>
                        <li>consultant</li>
                        <li>beauty artist</li>
                        <li>makeup class</li>
                    </ul>
                    <p>Call us today.</p>
                </section>
                <div class="elfsight-app-d42368f6-2094-4a8c-ac5a-8dc42d5a773f"></div>
        </div>
    )
}

export default Services
