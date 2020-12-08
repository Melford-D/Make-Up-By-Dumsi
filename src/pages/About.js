import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './About.css';
import {ceoImage} from '../data'

function About() {
    const [image, setImage] = useState(ceoImage);

    return (
        <>
        <section className="about-page">
          <Link to="/about" style={{textDecoration: "none", color: "#000"}}>
                <div className="image-container">
                      {image.map((item) => {
                      const {id, name, url} = item;
                       return(
                         <div key={id} className="image-wrapper">
                      <img src={url} alt={name}/>
                </div>
              )
          })}
          </div>
              <h1>Meet The ceo</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quaerat facere ea at ipsam asperiores veritatis aut ex sapiente, voluptates reiciendis, quam repellat, iste iure architecto facilis? Animi, molestias distinctio.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quaerat facere ea at ipsam asperiores veritatis aut ex sapiente, voluptates reiciendis, quam repellat, iste iure architecto facilis? Animi, molestias distinctio.</p>
          </Link>
        </section>
        </>
    )
}

export default About
