import './Header.css';
import logo from '../../images/logo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Burger from '../Burger/Burger';

export default function Header(props) {
  const { loggedIn } = props;
  const location = useLocation();
  const darkTheme = location.pathname === '/';

  return (
    <header className={'header section' + (darkTheme ? ' section_theme_dark' : '')}>
      <div className="container container_size_l header__container">
        <Link to="/"><img src={logo} alt="Логотип" /></Link>
        <nav className="header__nav">
          <ul className="list header__nav-list">
            {loggedIn && (
              <li className="header__nav-item">
                <NavLink to="/movies"
                  className={`header__nav-link ${darkTheme ? 'header__nav-link_theme_dark' : ''}`}
                  activeClassName="header__nav-link_active">Фильмы</NavLink>
              </li>
            )}
            {loggedIn && (
              <li className="header__nav-item">
                <NavLink to="/saved-movies"
                  className={`header__nav-link ${darkTheme ? 'header__nav-link_theme_dark' : ''}`}
                  activeClassName="header__nav-link_active">Сохраненные фильмы</NavLink>
              </li>
            )}
          </ul>
          <ul className="list header__nav-list">
            {!loggedIn && (<li className="header__nav-item"><Link to="/signup" className="header__register">Регистрация</Link></li>)}
            {!loggedIn && (<li className="header__nav-item"><Link to="/signin" className="header__login">Войти</Link></li>)}
            {loggedIn && (
              <li className="header__nav-item">
                <Link to="/profile" className={`header__profile ${darkTheme ? 'header__profile_theme_dark' : ''}`}>
                  <div className={`header__profile-icon ${darkTheme ? 'header__profile-icon_theme_dark' : ''}`} />Аккаунт
                </Link>
              </li>)}
            {loggedIn && (
              <li className="header__nav-item">
                <label htmlFor="burger">
                  <img src="#" alt="Меню" className={`header__burger ${darkTheme ? 'header__burger_theme_dark' : ''}`} />
                </label>
              </li>)}
          </ul>
        </nav>
      </div>
      <Burger />
    </header >
  )
}
