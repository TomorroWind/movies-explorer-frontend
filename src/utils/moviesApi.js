import { MovieApiBaseUrl } from './config';

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _fetchWrapper(fetchPromise) {
    return fetchPromise
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(new Error(`Ошибка: ${response.status}`));
        }
      })
  }

  getMovies() {
    const fetchPromise = fetch(this._baseUrl + '/beatfilm-movies');

    return this._fetchWrapper(fetchPromise);
  }
}

export const moviesApi = new MoviesApi(MovieApiBaseUrl);
