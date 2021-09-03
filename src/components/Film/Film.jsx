import React from "react";
import AboutFilm from "../AboutFilm/AboutFilm";
import "./Film.css";

function Film({ film, handleClick }) {
  const [isGettingInfo, setIsGettingInfo] = React.useState(false);
  const [about, setAbout] = React.useState(null);

  React.useEffect(() => {
    if (isGettingInfo)
      handleClick(film.imdbID)
        .then((data) => {
          setAbout(data);
        })
        .catch((err) => console.log("Err: " + err));
    else setAbout(null);
  }, [isGettingInfo, film.imdbID, handleClick]);

  function onClick(e) {
    e.preventDefault();
    setIsGettingInfo(!isGettingInfo);
  }

  function getAboutFilm() {
    if (about) return <AboutFilm about={about} />;
  }
  return (
    <>
      <img
        className="film_image"
        src={film.Poster}
        alt={`Poster ${film.Title}`}
      />
      <h2 className="film__title">{film.Title}</h2>
      <p className="film__desc">
        <span className="film__subtitle">Year: </span>
        {film.Year}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">Type: </span>
        {film.Type}
      </p>
      <p className="film__desc">
        <span className="film__subtitle">imdbID: </span>
        {film.imdbID}
      </p>
      <button className="film__button" onClick={onClick}>
        Подробнее
      </button>
      {getAboutFilm()}
    </>
  );
}

export default Film;
