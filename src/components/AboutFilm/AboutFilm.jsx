import React from "react";
import "./AboutFilm.css";

function AboutFilm({ about }) {
  console.log(about);
  return (
    <>
      <p className="film__desc">
        <span className="film__subtitle">Actors: </span>
        {about.Actors}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Awards: </span>
        {about.Awards}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">BoxOffice: </span>
        {about.BoxOffice}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Country: </span>
        {about.Country}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Director: </span>
        {about.Director}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Genre: </span>
        {about.Genre}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Language: </span>
        {about.Language}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Metascore: </span>
        {about.Metascore}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Plot: </span>
        {about.Plot}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">imdbRating: </span>
        {about.imdbRating}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Writer: </span>
        {about.Writer}
      </p>
      {about.Ratings.map((rating, index) => (
        <p key={index} className="film__desc">
          <span className="film__subtitle">{rating.Source}: </span>
          {rating.Value}
        </p>
      ))}
    </>
  );
}

export default AboutFilm;
