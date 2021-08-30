class OmdbApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getFilmsByTitle(searchRequest) {
    return fetch(
      `${this._baseUrl}?apikey=${this._apiKey}&s=${searchRequest}`
    ).then(this._checkResponse);
  }

  getInfoAboutFilm(imdbID) {
    return fetch(
      `${this._baseUrl}?apikey=${this._apiKey}&i=${imdbID}`
    ).then(this._checkResponse);
  }
}

const options = { baseUrl: `https://www.omdbapi.com/`, apiKey: `850772fe` };

export const omdbapi = new OmdbApi(options);
