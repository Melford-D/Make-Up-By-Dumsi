import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Nav.css';

function About() {
    return (
        <>
        <section className="about-page">
          <Link to="/about" style={{textDecoration: "none", color: "#000"}}>
              <h1>Hello from about</h1>
          </Link>
        </section>
        </>
    )
}

export default About
