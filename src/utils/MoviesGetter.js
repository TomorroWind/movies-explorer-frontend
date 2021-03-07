export default class MoviesGetter {
  constructor(resource) {
    this._resource = resource;
  }

  getMovies() {

    return this._getFromLocalStorage()
      .then((movies) => {
        if (movies) {
          return movies;
        }

        return movies = this._resource.getMovies();
      })
      .then((movies) => {
        if (movies && movies.length) {
          this._putToLocalStorage(movies);
        }

        return movies;
      })
  }

  cleanUp() {
    localStorage.removeItem(this._getLocalStorageKey());
  }

  _getLocalStorageKey() {
    return this._resource.constructor.name;
  }

  _getFromLocalStorage() {
    return Promise.resolve(JSON.parse(localStorage.getItem(this._getLocalStorageKey())));
  }

  _putToLocalStorage(movies) {
    localStorage.setItem(this._getLocalStorageKey(), JSON.stringify(movies));
  }
}
