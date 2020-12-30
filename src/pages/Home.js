import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Logo from '../images/logo.png';
import { imageData } from '../data'


const Home = () => {
    const [image, setImage] = useState(imageData);
    return (
        <>
        <section className="home-page">
            <Link to="/" />
                    <div className="image-container">
                      <h1>We offer the best services!</h1>
                      {image.map((item) => {
                      const {id, name, url} = item;
                       return(
                         <div key={id} className="image-wrapper">
                      <img src={url} alt={name}/>
                    </div>
              )
          })}
          </div>

           <div class="elfsight-app-d42368f6-2094-4a8c-ac5a-8dc42d5a773f"></div>
           <footer>
                <hr />
               <div className="footer-logo">
                     <img src={Logo} alt="logo" />
                </div>
           </footer>
        </section>
        </>
    )
}

export default Home
