export default class MoviesVeiwer {
  constructor(movies, configuration) {
    this._movies = movies;
    this._config = configuration;
    this._showedMovies = 0;
  }

  showMore() {
    const screenConfig = this._getThresholdConfig(this._getScreenWidth());

    this._showedMovies = this._showedMovies ? this._showedMovies + screenConfig.moreCount : screenConfig.initCount;
    this._showedMovies = Math.min(this._showedMovies, this._movies.length + 1);

    return this._movies.filter((m, i) => i < this._showedMovies);
  }

  hasMore() {
    return this._showedMovies < this._movies.length;
  }

  _getThresholdConfig(width) {
    return this._config.find((c) => width >= c.threshold);
  }

  _getScreenWidth() {
    return window.innerWidth;
  }
}
