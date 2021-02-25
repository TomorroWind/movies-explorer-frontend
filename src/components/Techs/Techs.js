import './Techs.css';

export default function Techs(props) {
  return (
    <section className="techs section section_theme_gray">
      <div className="container">
        <h2 className="section-title">Технологии</h2>
        <div className="techs__main">
          <h3 className="techs__main-title">7 технологий</h3>
          <p className="techs__main-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="list techs__list">
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
