import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Logo from '../images/logo.png';

import { imageData } from '../data'

const Home = () => {
    const [image, setImage] = useState(imageData);
    // const [video, setVideo] = useState(videoData);
    return (
        <>
        <section className="home-page">
            <Link to="/" />
                    <div className="image-container">
                      <h1 id="top-page">We offer the best services!</h1>
                      {image.map((item) => {
                      const {id, name, url} = item;
                       return(
                         <div key={id} className="image-wrapper">
                      <img src={url} alt={name}/>
                    </div>
              )
          })}
          </div>

          {/* Add a video section later */}

          {/* <section className="video-container">
              {video.map((item) => {
                  const {id, name, url} = item;
                  return(
                      <div key={id} className="video-wrapper">
                          <video src={url} controls>
                          </video>
                      </div>
                  )
              })}
          </section> */}
           <div class="elfsight-app-d42368f6-2094-4a8c-ac5a-8dc42d5a773f"></div>
           <footer>
                <hr />
               <div className="footer-logo">
                   <a href="#top-page">
                     <img src={Logo} alt="logo" />
                   </a>
                </div>
           </footer>
        </section>
        </>
    )
}

export default Home
