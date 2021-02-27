import './Header.css';
import logo from '../../images/logo.svg';
import burger from '../../images/burger.svg';
import { NavLink, useLocation } from 'react-router-dom';
import Burger from '../Burger/Burger';

export default function Header(props) {
  const { loggedIn = false } = props;
  const location = useLocation();

  return (
    <header className={'header section' + (location.pathname === '/' ? ' section_theme_dark' : '')}>
      <div className="container container_size_l header__container">
        <a href="/"><img src={logo} alt="Логотип" /></a>
        <nav className="header__nav">
          <ul className="list header__nav-list">
            {loggedIn && (
              <li className="header__nav-item">
                <NavLink to="/movies" className="header__nav-link" activeClassName="header__nav-link_active">Фильмы</NavLink>
              </li>
            )}
            {loggedIn && (
              <li className="header__nav-item">
                <NavLink to="/saved-movies" className="header__nav-link" activeClassName="header__nav-link_active">Сохраненные фильмы</NavLink>
              </li>
            )}
          </ul>
          <ul className="list header__nav-list">
            {!loggedIn && (<li className="header__nav-item"><a href="/signup" className="header__register">Регистрация</a></li>)}
            {!loggedIn && (<li className="header__nav-item"><a href="/signin" className="header__login">Войти</a></li>)}
            {loggedIn && (
              <li className="header__nav-item">
                <a href="/profile" className="header__profile">
                  <div className="header__profile-icon" />Аккаунт
                </a>
              </li>)}
            {loggedIn && (
              <li className="header__nav-item">
                <label htmlFor="burger">
                  <img src={burger} alt="Меню" className="header__burger" />
                </label>
              </li>)}
          </ul>
        </nav>
      </div>
      <Burger />
    </header >
  )
}
