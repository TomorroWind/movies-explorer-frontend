import './AboutProject.css';

export default function AboutProject(props) {
  return (
    <section id="about-project" className="about-project section">
      <div className="container">
        <h2 className="section-title">О проекте</h2>
        <ul className="about-project__list list">
          <li className="about-project__item">
            <h3 className="about-project__item-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__item-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__item">
            <h3 className="about-project__item-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__item-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="about-project__progress">
          <p className="about-project__progress-step">1 неделя</p>
          <p className="about-project__progress-step">4 недели</p>
          <p className="about-project__progress-description">Back-end</p>
          <p className="about-project__progress-description">Front-end</p>
        </div>
      </div>
    </section>
  )
}
