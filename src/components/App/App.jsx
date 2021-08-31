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
        setResults(data.Search);
      })
      .catch((err) => console.log("Error: " + err));
  };

  const handleClick = (imdbID) => {
    return omdbapi.getInfoAboutFilm(imdbID);
  };

  return (
    <div className="App">
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
      <ResultList results={results} handleClick={handleClick} />
    </div>
  );
}

export default App;
