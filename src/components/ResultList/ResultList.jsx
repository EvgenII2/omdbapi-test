import Film from "../Film/Film";
import "./ResultList.css";

function ResultList({
  results,
  handleClick,
  setPage,
  page,
  handleSearchSubmit,
  request,
  lastPage,
}) {
  return (
    <div className="result-container">
      {page > 1 && (
        <button
          className="result-container__button"
          onClick={() => {
            if (page > 1) {
              handleSearchSubmit(request, page - 1);
              setPage(page - 1);
            }
          }}
        >
          &#8592;
        </button>
      )}

      <ul className="results">
        {results.map((film, index) => (
          <li key={index} className="film-container">
            <Film film={film} handleClick={handleClick} />
          </li>
        ))}
      </ul>
      {lastPage > page && request !== "" && (
        <button
          className="result-container__button"
          onClick={() => {
            if (lastPage > page) {
              handleSearchSubmit(request, page + 1);
              setPage(page + 1);
            }
          }}
        >
          &#8594;
        </button>
      )}
    </div>
  );
}

export default ResultList;
