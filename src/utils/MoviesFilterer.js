import { ShortMovieDuration } from '../utils/config';

export default class MoviesFilterer {
  constructor(movies) {
    this._movies = movies;
    this._filters = [];
  }

  filter() {
    if (!this._movies) {
      return null;
    }

    if (!this._filters.length) {
      return this._movies;
    }

    return this._filters.reduce((filteredMovies, filter) => filter(filteredMovies), this._movies);
  }

  addFilter(filter) {
    this._filters.push(this._buildFilter(filter))
  }

  _buildFilter(filterFunction) {
    return function (moviesToFilter) {
      return moviesToFilter.filter((m) => filterFunction(m));
    };
  }
}

export function byKeyWords(keyWords) {
  return function (movie) {
    const searchText = [movie.nameRU, movie.nameEN, movie.director, movie.country, movie.year].join('|');
    return searchText.toLowerCase().includes(keyWords.toLowerCase());
  }
}

export function byShortMovies() {
  return function (movie) {
    return movie.duration <= ShortMovieDuration;
  }
}

