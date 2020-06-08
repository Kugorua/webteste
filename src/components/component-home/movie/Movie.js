import React from 'react';
import movie from '../../../svgs/movie.svg';
import './movie.scss';
export default function Movie() {
  return (
    <div className="site_wrap--padding movie">
      <div className="movie__title" data-sal="zoom-out" data-sal-delay="500">
        <h3>MOVIE</h3>
      </div>
      <div className="movie__img" data-sal="zoom-out" data-sal-delay="500">
        <img src={movie} alt="Speaker" />
      </div>
    </div>
  );
}
