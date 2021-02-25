import './MoviesCard.css';


export default function MoviesCard(props) {
  return (
    <article className="movies-card">
      <p className="movies-card__description">В погоне за Бенкси</p>
      <p className="movies-card__duration">27 минут</p>
      <img src={props.poster} alt="Постер к фильму Джокер" className="mvoies-card__poster" />
      <button type="button" className={`movies-card__action ${props.actionState}`} />
    </article>
  )
}
