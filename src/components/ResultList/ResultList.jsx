import Film from "../Film/Film";
import PageList from "../PageList/PageList";
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
    results.length > 0 && (
      <>
        <div className="result-container">
          {page > 1 && (
            <button
              className="result-container__button result-container__button-left"
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
              className="result-container__button result-container__button-right"
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
        <PageList
          setPage={setPage}
          page={page}
          handleSearchSubmit={handleSearchSubmit}
          request={request}
          lastPage={lastPage}
        />
      </>
    )
  );
}

export default ResultList;
