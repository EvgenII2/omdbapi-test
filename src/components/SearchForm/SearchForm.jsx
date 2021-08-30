import React from "react";
import "./SearchForm.css";

function SearchForm({ handleSearchSubmit }) {
  const [value, setValue] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(value);
  };

  return (
    <form name="SearchForm" className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        name="searchInput"
        id="searchInput"
        className="search-form__input"
        required
        minLength="2"
        maxLength="40"
        placeholder="Добавь название фильма"
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
