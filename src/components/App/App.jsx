import "./App.css";
import { omdbapi } from "../../utils/omdbapi";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultList/ResultList";
import React, { useEffect } from "react";
import LoadingImage from "../LoadingImage/LoadingImage";

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
          setIsLoading(false);
        }
      })
      .catch((err) => console.log("Error: " + err));
  };

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
      <LoadingImage isVisible={isLoading} />
      {results ? (
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
      ) : (
        <div>Don't search {request}</div>
      )}
    </div>
  );
}

export default App;
