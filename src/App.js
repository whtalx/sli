import React from 'react';
import './App.css';

export default () =>
  <div>
    <input hidden type="radio" name="radio" id="one" defaultChecked />
    <input hidden type="radio" name="radio" id="two" />
    <input hidden type="radio" name="radio" id="three" />
    <input hidden type="radio" name="radio" id="four" />
    <div className="controls">
      <label htmlFor="one"></label>
      <label htmlFor="two"></label>
      <label htmlFor="three"></label>
      <label htmlFor="four"></label>
    </div>
    <div className="slider">
      <div className="container big">
        <div className="slide">
          <img src={ `https://picsum.photos/800/600?random=${Math.round(Math.random() * 80)}` } alt="big" className="img-big" width="800" />
        </div>
        <div className="slide">
          <img src={ `https://picsum.photos/800/600?random=${Math.round(Math.random() * 80)}` } alt="big" className="img-big" width="800" />
        </div>
        <div className="slide">
          <img src={ `https://picsum.photos/800/600?random=${Math.round(Math.random() * 80)}` } alt="big" className="img-big" width="800" />
        </div>
        <div className="slide">
          <img src={ `https://picsum.photos/800/600?random=${Math.round(Math.random() * 80)}` } alt="big" className="img-big" width="800" />
        </div>
      </div>
      <div className="container smol">
        <div className="slide">
          <img src={ `https://picsum.photos/400/280?random=${Math.round(Math.random() * 80)}` } alt="smol" className="img-smol" width="400" />
        </div>
        <div className="slide">
          <img src={ `https://picsum.photos/400/280?random=${Math.round(Math.random() * 80)}` } alt="smol" className="img-smol" width="400" />
        </div>
        <div className="slide">
          <img src={ `https://picsum.photos/400/280?random=${Math.round(Math.random() * 80)}` } alt="smol" className="img-smol" width="400" />
        </div>
        <div className="slide">
          <img src={ `https://picsum.photos/400/280?random=${Math.round(Math.random() * 80)}` } alt="smol" className="img-smol" width="400" />
        </div>
      </div>
    </div>
  </div>
