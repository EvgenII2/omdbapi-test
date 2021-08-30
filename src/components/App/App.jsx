import "./App.css";
import { omdbapi } from "../../utils/omdbapi";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultList/ResultList";
import React from "react";

function App() {
  const [results, setResults] = React.useState([]);

  const handleSearchSubmit = (request) => {
    omdbapi
      .getFilmsByTitle(request)
      .then((data) => {
        console.log("data", data);
        setResults(data.Search);
      })
      .catch((err) => console.log("Error: " + err));
  };

  const handleClick = (imdbID) => {
    omdbapi
      .getInfoAboutFilm(imdbID)
      .then((data) => {
        console.log("data", data);
        return data;
      })
      .catch((err) => console.log("Error: " + err));
  };

  return (
    <>
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
      <ResultList results={results} handleClick={handleClick} />
    </>
  );
}

export default App;
