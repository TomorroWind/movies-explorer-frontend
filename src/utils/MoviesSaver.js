export default class MoviesSaver {
  constructor(resource) {
    this._resource = resource;
  }

  save(movie) {

    const movieRequestData = {
      movieId: movie.movieId,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailer: movie.trailer,
      thumbnail: movie.thumbnail,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    }

    return this._resource.addMovie(movieRequestData)
      .then((addedMovie) => {
        this._cleanUpLocalStorage();
        return addedMovie;
      });
  }

  unsave(_id) {

    return this._resource.deleteMovie(_id)
      .then((removedMovie) => {
        this._cleanUpLocalStorage();
        return removedMovie;
      });
  }

  _cleanUpLocalStorage() {
    return localStorage.removeItem(this._getLocalStorageKey());
  }

  _getLocalStorageKey() {
    return this._resource.constructor.name;
  }
}
