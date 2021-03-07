import { MovieApiBaseUrl } from "./config";
import { EmptyThumbnailIcon, ValueNotKnown, YearNotKnown } from "./const";

class Movie {
  constructor(movie) {
    this._movie = movie;
  }

  get _id() { return ''; }
  get movieId() { return ''; }
  get country() { return ''; }
  get director() { return ''; }
  get duration() { return ''; }
  get year() { return ''; }
  get description() { return ''; }
  get image() { return ''; }
  get trailer() { return ''; }
  get thumbnail() { return ''; }
  get nameRU() { return ''; }
  get nameEN() { return ''; }
  get getMovie() { return this._movie; }
}

export class BeatMovie extends Movie {
  get movieId() { return this._movie.id.toString(); }
  get country() { return this._movie.country || ValueNotKnown; }
  get director() { return this._movie.director || ValueNotKnown; }
  get duration() { return +this._movie.duration || ValueNotKnown; }
  get year() { return this._movie.year || YearNotKnown; }
  get description() { return this._movie.description || ValueNotKnown; }
  get image() { return this._movie.image?.url ? MovieApiBaseUrl + this._movie.image.url : EmptyThumbnailIcon; }
  get trailer() { return this._movie.trailerLink; }
  get thumbnail() { return this._movie.formats?.thumbnail?.url ? MovieApiBaseUrl + this._movie.formats?.thumbnail?.url : EmptyThumbnailIcon; }
  get nameRU() { return this._movie.nameRU; }
  get nameEN() { return this._movie.nameEN || ValueNotKnown; }
}

export class LocalMovie extends Movie {
  get _id() { return this._movie._id; }
  get movieId() { return this._movie.movieId; }
  get country() { return this._movie.country; }
  get director() { return this._movie.director; }
  get duration() { return +this._movie.duration; }
  get year() { return this._movie.year; }
  get description() { return this._movie.description; }
  get image() { return this._movie.image; }
  get trailer() { return this._movie.trailer; }
  get thumbnail() { return this._movie.thumbnail; }
  get nameRU() { return this._movie.nameRU; }
  get nameEN() { return this._movie.nameEN; }
}
