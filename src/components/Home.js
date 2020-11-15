import React, { useEffect, useState, useContext } from 'react';
import {data} from '../data'
import MainProvider from './Main';

const Home = () => {
    const [img, setImg] = useState(data);
    return (
        <header>
            <MainProvider/>
              <div className="wrapper">
          {img.map((item) => {
              const {id, name, url} = item;
              return(
                  <article key={id} className="video-wrapper">
                      <video src={url} controls></video>
                  </article>
              )
          })}
          </div>
        </header>
    )
}

export default Home
