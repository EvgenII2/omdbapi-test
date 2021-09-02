import "./App.css";
import { omdbapi } from "../../utils/omdbapi";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultList/ResultList";
import React, { useEffect } from "react";

function App() {
  const [results, setResults] = React.useState([]);
  const [request, setRequest] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearchSubmit = (request, page) => {
    setIsLoading(true);
    omdbapi
      .getFilmsByTitle(request, page)
      .then((data) => {
        if (data.Response) {
          setResults(data.Search);
          setLastPage(Math.ceil(data.totalResults / 10));
        }
      })
      .catch((err) => console.log("Error: " + err));
  };

  useEffect(() => {
    if (isLoading) setIsLoading(false);
  }, [results]);

  useEffect(() => {
    setPage(1);
  }, [request]);

  const handleClick = (imdbID) => {
    return omdbapi.getInfoAboutFilm(imdbID);
  };

  return (
    <div className="App">
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        setRequest={setRequest}
      />
      {isLoading ? (
        <div>Waiting</div>
      ) : (
        results &&
        results.length > 0 && (
          <>
            <ResultList
              results={results}
              setPage={setPage}
              page={page}
              lastPage={lastPage}
              request={request}
              handleClick={handleClick}
              handleSearchSubmit={handleSearchSubmit}
            />
          </>
        )
      )}
    </div>
  );
}

export default App;
