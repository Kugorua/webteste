import React from 'react';
import movie from '../../../images2/movie@2x.png';
import './movie.scss';
export default function Movie() {
  return (
    <div className="site_wrap--padding movie">
      <div className="movie__title">
        <h3>MOVIE</h3>
      </div>
      <div className="movie__img">
        <img src={movie} alt="Speaker" />
      </div>
    </div>
  );
}
