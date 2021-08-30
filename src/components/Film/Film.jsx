import React from "react";
import "./Film.css";

function Film({ film, handleClick }) {
  const [about, setAbout] = React.useState("{}");

  const onClick = (e) => {
    e.preventDefault();
    setAbout(handleClick(film.imdbID));
    console.log(about);
  };
  return (
    <>
      <img
        className="film_image"
        src={film.Poster}
        alt={`Poster ${film.Title}`}
      />
      <h2 className="film__title">{film.Title}</h2>
      <p className="film__year">{film.Year}</p>
      <p className="film__type">{film.Type}</p>
      <p className="film__id">{film.imdbID}</p>
      <button className="film__button" onClick={onClick}>
        Подробнее
      </button>
      <p>{about}</p>
    </>
  );
}

export default Film;
