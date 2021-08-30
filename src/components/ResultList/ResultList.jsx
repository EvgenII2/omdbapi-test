import Film from "../Film/Film";
import "./ResultList.css";

function ResultList({ results, handleClick }) {
  return (
    <ul className="result-container">
      {results.map((film) => (
        <li key={film.imdbID} className="film">
          <Film film={film} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
