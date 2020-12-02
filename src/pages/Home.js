import { Link } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
// import {data} from '../data'
// import MainProvider from './Main';

const Home = () => {
    // const [img, setImg] = useState(data);
    return (
        <>
        <section className="section-1">
            <Link to="/">
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
