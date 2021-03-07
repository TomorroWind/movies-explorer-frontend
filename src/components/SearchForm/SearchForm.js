import { useState } from 'react';
import './SearchForm.css';

export default function SearchForm(props) {
  const { onSubmit, onFilterChange } = props;

  const [keyWords, setKeyWords] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ keyWords, shortMovies });
  }

  const hadnleSearchChange = (e) => {
    setKeyWords(e.target.value);
  }

  const hadnleShortMoviesChange = (e) => {
    setShortMovies(e.target.checked);
    onFilterChange({ keyWords, shortMovies: e.target.checked });
  }

  return (
    <section className="search-form section">
      <form method="POST" action="#" name="search-form" className="container container_size_l search-form__container" onSubmit={handleSubmit}>
        <div className="search-form__bar">
          <input type="text" placeholder="Фильм" name="search-movie" id="search-movie" className="search-form__input" onChange={hadnleSearchChange} value={keyWords} />
          <button type="submit" className="search-form__submit" />
        </div>
        <label className="search-form__filter-container">Короткометражки
          <input type="checkbox" name="short-movies" id="short-movies" className="search-form__filter-checkbox" onChange={hadnleShortMoviesChange} checked={shortMovies} />
          <span className="search-form__filter-checkmark"></span>
        </label>
      </form>
    </section>
  )
}
