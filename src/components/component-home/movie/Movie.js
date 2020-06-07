import React from 'react';
import './movie.scss';
export default function Movie() {
  return (
    <div className="movie grid-full">
      <div className="bg-tokyo-1 grid-full"></div>
      <div className="bg-tokyo-2 grid-full"></div>
      <div className="movie__wrap grid">
        <h2>MOVE</h2>
        <div className="borders"></div>
        <iframe
          width={700}
          height={395}
          src="https://www.youtube.com/embed/AKmoccuRiN4"
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
