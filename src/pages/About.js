import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './About.css';
import {ceoImage} from '../data'

function About() {
    const [image, setImage] = useState(ceoImage);

    
    useEffect(() => {
      if (image === undefined ){
        return setImage('Oops!!! Error loading images. Please check your internet connection.');
      }
    }, [image])

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
                       <p className="description">{details}</p>
                </div>
              )
          })}
          </div>
          <div class="elfsight-app-d42368f6-2094-4a8c-ac5a-8dc42d5a773f"></div>
        </section>
        </>
    )
}

export default About
