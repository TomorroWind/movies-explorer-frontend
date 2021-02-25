import './Promo.css';

export default function Promo(props) {
  return (
    <section className="promo section section_theme_dark">
      <div className="container promo__container">
        <div className="promo__text">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#about-project" className="promo__show-more">Узнать больше</a>
        </div>
        <div className="promo__image"></div>
      </div>
    </section>
  )
}
