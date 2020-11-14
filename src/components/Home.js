import React, { useEffect, useState } from 'react';
import {data} from '../data'
import Main from './Main';
const Home = () => {
    const [img, setImg] = useState(data);
    // useEffect(() => {
    //   return(setImg(()=>console.log("hello world")
    //   ));
    // },[img])
    return (
        <header>
            <Main/>
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
