import { mainApi } from "./mainApi";
import { BeatMovie, LocalMovie } from "./Movie";
import { moviesApi } from "./moviesApi";
import MoviesFilterer, { byKeyWords, byShortMovies } from "./MoviesFilterer";
import MoviesGetter from "./MoviesGetter";
import MoviesSaver from "./MoviesSaver";

export class MoviesFactory {
  static createGetter() {
    return null;
  }

  static createMovie(movie) {
    return null;
  }

  static createSaver(movie) {
    return null;
  }

  static createFilterer(movies, filterValues) {
    const filterer = new MoviesFilterer(movies);

    if (filterValues.keyWords) {
      filterer.addFilter(byKeyWords(filterValues.keyWords));
    }

    if (filterValues.shortMovies) {
      filterer.addFilter(byShortMovies());
    }

    return filterer;
  }
}

export class LocalMoviesFactory extends MoviesFactory {
  static createGetter() {
    return new MoviesGetter(mainApi);
  }

  static createMovie(movie) {
    return new LocalMovie(movie);
  }

  static createSaver(movie) {
    return new MoviesSaver(mainApi);
  }
}

export class BeatMoviesFactory extends MoviesFactory {
  static createGetter() {
    return new MoviesGetter(moviesApi);
  }

  static createMovie(movie) {
    return new BeatMovie(movie);
  }
}
