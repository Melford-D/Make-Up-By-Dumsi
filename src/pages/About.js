import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Nav.css';

function About() {
    return (
        <>
        <section className="about-page">
          <Link to="/about" style={{textDecoration: "none", color: "#000"}}>
              <h1>Hello from about</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quaerat facere ea at ipsam asperiores veritatis aut ex sapiente, voluptates reiciendis, quam repellat, iste iure architecto facilis? Animi, molestias distinctio.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quaerat facere ea at ipsam asperiores veritatis aut ex sapiente, voluptates reiciendis, quam repellat, iste iure architecto facilis? Animi, molestias distinctio.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quaerat facere ea at ipsam asperiores veritatis aut ex sapiente, voluptates reiciendis, quam repellat, iste iure architecto facilis? Animi, molestias distinctio.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quaerat facere ea at ipsam asperiores veritatis aut ex sapiente, voluptates reiciendis, quam repellat, iste iure architecto facilis? Animi, molestias distinctio.</p>
          </Link>
        </section>
        </>
    )
}

export default About
