import './NotFound.css';
import { Link, useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();

  const handleBackClick = (e) => {
    e.preventDefault();
    history.goBack();
  }

  return (
    <section className="not-found section">
      <div className="container container_size_s not-found__container">
        <div className="not-found__error">
          <h1 className="not-found__error-code">404</h1>
          <p className="not-found__error-description">Страница не найдена</p>
        </div>
        <Link to="#" className="not-found__link" onClick={handleBackClick}>Назад</Link>
      </div>
    </section>
  )
}
