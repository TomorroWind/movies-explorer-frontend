import './Burger.css';
import { NavLink } from 'react-router-dom';
import close from '../../images/close.svg';

export default function Burger() {
  return (
    <>
      <input type="checkbox" id="burger" className="burger__checkbox" />
      <section className="burger">
        <div className="burger__menu">
          <label htmlFor="burger">
            <img src={close} alt="Закрыть меню" className="burger__close" />
          </label>
          <nav className="burger__nav">
            <ul className="list burger__nav-list">
              <li className="header__nav-item">
                <NavLink to="/" exact className="burger__link" activeClassName="burger__link_active">Главная</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/movies" className="burger__link" activeClassName="burger__link_active">Фильмы</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/saved-movies" className="burger__link" activeClassName="burger__link_active">Сохраненные фильмы</NavLink>
              </li>
            </ul>
          </nav>
          <a href="/profile" className="header__profile burger__profile">
            <div className="header__profile-icon" />Аккаунт
          </a>
        </div>

      </section>
    </>
  );
}
