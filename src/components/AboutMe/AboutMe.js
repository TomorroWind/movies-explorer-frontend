import './AboutMe.css';
import photo from '../../images/profile-photo.jpg';

export default function AbooutMe(props) {
  return (
    <section className="about-me section">
      <div className="container">
        <h2 className="section-title">Студент</h2>
        <div className="about-me__main">
          <div className="about-me__info">
            <h3 className="about-me__title">Михаил</h3>
            <p className="about-me__description">Фронтенд-разработчик, 32 года</p>
            <p className="about-me__story">Я родился и живу в Санкт-Петербурге, закончил Политех. У меня есть жена и сын. Я люблю слушать музыку, а ещё увлекаюсь акробатикой. Недавно заинтересовался вебом.
            С 2009 работаю разработчиком ERP-систем. После того, как набрался опыта, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className="list about-me__contacts">
              <li><a href="https://ru-ru.facebook.com/" className="about-me__contact">Facebook</a></li>
              <li><a href="https://github.com/TomorroWind/" className="about-me__contact">Github</a></li>
            </ul>
          </div>
          <img src={photo} className="about-me__photo" alt="Фотография Михаила" />
        </div>
      </div>
    </section>
  )
}
