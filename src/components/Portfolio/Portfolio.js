import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <section className="portfolio section">
      <div className="container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="list portfolio__list">
          <li>
            <a href="https://github.com/TomorroWind/how-to-learn" className="portfolio__item">
              <p className="portfolio__item-description">Статичный сайт</p>
              <p className="portfolio__item-icon">↗</p>
            </a>
          </li>
          <li>
            <a href="https://tomorrowind.github.io/russian-travel/" className="portfolio__item">
              <p className="portfolio__item-description">Адаптивный сайт</p>
              <p className="portfolio__item-icon">↗</p>
            </a>
          </li>
          <li>
            <a href="http://tomorrowind.students.nomoreparties.xyz/" className="portfolio__item">
              <p className="portfolio__item-description">Одностраничный сайт</p>
              <p className="portfolio__item-icon">↗</p>
            </a>
          </li>
        </ul>
      </div>
    </section >
  )
}
