import { apiBaseUrl } from './config';
import { wrapApiError } from './errors';

class Api {

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._token = '';
  }

  setToken(token) {
    this._token = token;
  }

  _createDefaultHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    }

    if (this._token) {
      headers.Authorization = `Bearer ${this._token}`;
    }

    return headers;
  }

  _fetchWrapper(fetchPromise) {
    return fetchPromise
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(wrapApiError(response));
        }
      })
  }

  register({ password, email, name }) {
    const fetchPromis = fetch(this._baseUrl + '/signup', {
      headers: this._createDefaultHeaders(),
      method: 'POST',
      body: JSON.stringify({ password, email, name }),
    });

    return this._fetchWrapper(fetchPromis);
  }


  login({ email, password }) {
    const fetchPromis = fetch(this._baseUrl + '/signin', {
      headers: this._createDefaultHeaders(),
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    return this._fetchWrapper(fetchPromis);
  }

  getMe() {
    const fetchPromise = fetch(this._baseUrl + '/users/me', {
      headers: this._createDefaultHeaders()
    });

    return this._fetchWrapper(fetchPromise);
  }

  updateMe({ email, name }) {
    const fetchPromis = fetch(this._baseUrl + '/users/me', {
      headers: this._createDefaultHeaders(),
      method: 'PATCH',
      body: JSON.stringify({ email, name }),
    });

    return this._fetchWrapper(fetchPromis);
  }

  getMovies() {
    const fetchPromise = fetch(this._baseUrl + '/movies', {
      headers: this._createDefaultHeaders()
    });

    return this._fetchWrapper(fetchPromise);
  }

  addMovie(movie) {
    const fetchPromise = fetch(this._baseUrl + '/movies', {
      headers: this._createDefaultHeaders(),
      method: 'POST',
      body: JSON.stringify(movie)
    });

    return this._fetchWrapper(fetchPromise);
  }

  deleteMovie(_id) {
    const fetchPromise = fetch(this._baseUrl + `/movies/${_id}`, {
      headers: this._createDefaultHeaders(),
      method: 'DELETE'
    });

    return this._fetchWrapper(fetchPromise);
  }
}

export const mainApi = new Api(apiBaseUrl);
