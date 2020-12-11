import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './About.css';
import {ceoImage} from '../data'

function About() {
    const [image, setImage] = useState(ceoImage);

    return (
        <>
        <section className="about-page">
          <Link to="/about" />
            <h1>About</h1>
                <div className="image-container">
                      {image.map((item) => {
                      const {id, name, url, details} = item;
                       return(
                         <div key={id} className="image-wrapper">
                      <img src={url} alt={name}/>
                      <h1>Meet The ceo: {name} </h1>
                       <p>{details}</p>
                </div>
              )
          })}
          </div>
        </section>
        </>
    )
}

export default About
