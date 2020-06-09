import React from 'react';
import movie from '../../../svgs/movie.svg';
import './movie.scss';
export default function Movie() {
  return (
    <div className="bg__movie" id="scroll-movie">
      <div className="bg__movie--1"></div>
      <div className="bg__movie--2"></div>
      <div className="bg__movie--3"></div>
      <div className="bg__movie--4">
        <div className="site_wrap--padding movie">
          <div className="movie__title" data-sal="slide-up" data-sal-delay="500">
            <h3>MOVIE</h3>
          </div>
          <div className="movie__img" data-sal="slide-up" data-sal-delay="500">
            <iframe
              height={400}
              src="https://www.youtube.com/embed/AKmoccuRiN4"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
