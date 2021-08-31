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
        <span className="film__subtitle">Plot: </span>
        {about.Plot}
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
        <span className="film__subtitle">Writer: </span>
        {about.Writer}
      </p>
    </>
  );
}

export default AboutFilm;
