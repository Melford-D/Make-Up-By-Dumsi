import { Link } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import './Home.css';

import {imageData} from '../data'

const Home = () => {
    const [image, setImage] = useState(imageData);
    return (
        <>
        <section className="home-page">
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
                <h1>We offer the best services!</h1>
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
            </Link>
        </section>
        </>
    )
}

export default Home
