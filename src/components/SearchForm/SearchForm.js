import './SearchForm.css';

export default function SearchForm(props) {
  return (
    <section className="search-form section">
      <form method="POST" action="#" name="search-form" className="container container_size_l search-form__container">
        <div className="search-form__bar">
          <input type="text" placeholder="Фильм" name="search-movie" id="search-movie" minLength="2" className="search-form__input" />
          <button type="submit" className="search-form__submit" />
        </div>
        <label className="search-form__filter-container">Короткометражки
          <input type="checkbox" className="search-form__filter-checkbox" />
          <span className="search-form__filter-checkmark"></span>
        </label>
      </form>
    </section>
  )
}
