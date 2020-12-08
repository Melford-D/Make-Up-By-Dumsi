import { Link } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import './Home.css';

import {imageData, videoData} from '../data'

const Home = () => {
    const [image, setImage] = useState(imageData);
    const [video, setVideo] = useState(videoData);
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

          <section className="video-container">
              {video.map((item) => {
                  const {id, name, url} = item;
                  return(
                      <div key={id} className="video-wrapper">
                          <video src={url} controls>
                          </video>
                      </div>
                  )
              })}
          </section>
            </Link>
        </section>
        </>
    )
}

export default Home
