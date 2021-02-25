import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound(props) {
  return (
    <section className="not-found section">
      <div className="container container_size_s not-found__container">
        <div className="not-found__error">
          <h1 className="not-found__error-code">404</h1>
          <p className="not-found__error-description">Страница не найдена</p>
        </div>
        <Link to="/movies" className="not-found__link">Назад</Link>
      </div>
    </section>
  )
}
