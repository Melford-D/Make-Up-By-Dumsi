import { Link } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import '../components/Nav.css';

// import {data} from '../data'
// import MainProvider from './Main';

const Home = () => {
    // const [img, setImg] = useState(data);
    return (
        <>
        <section className="home-page">
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
                <h1>hello from home</h1>
            </Link>
            
              {/* <div className="wrapper">
          {img.map((item) => {
              const {id, name, url} = item;
              return(
                  <article key={id} className="video-wrapper">
                      <video src={url} controls></video>
                  </article>
              )
          })}
          </div> */}
        </section>
        </>
    )
}

export default Home
