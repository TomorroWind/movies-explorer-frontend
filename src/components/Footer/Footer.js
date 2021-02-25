import './Footer.css';

export default function Footer(props) {
  return (
    <footer className="footer section">
      <div className="container container_size_l">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__main">
          <p className="footer__copyright">&copy; 2020</p>
          <ul className="list footer__contacts">
            <li><a href="https://praktikum.yandex.ru/" className="footer__contact">Яндекс.Практикум</a></li>
            <li><a href="https://ru-ru.facebook.com/" className="footer__contact">Facebook</a></li>
            <li><a href="https://github.com/TomorroWind/" className="footer__contact">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
