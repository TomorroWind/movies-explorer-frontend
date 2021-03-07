import './MoviesCard.css';


export default function MoviesCard(props) {
  const { movie, onSave, onUnsave, isSaved, viewSavedAsChecked } = props;

  let actionClassName = 'movies-card__action ';

  if (isSaved) {
    actionClassName += viewSavedAsChecked ? 'movies-card__action_type_unsave' : 'movies-card__action_type_delete';
  } else {
    actionClassName += 'movies-card__action_type_save';
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSaved) {
      onUnsave(movie);
    } else {
      onSave(movie);
    }
  }

  const onCardClick = () => {
    window.open(movie.trailer, '_blank');
  }

  return (
    <article className="movies-card" onClick={onCardClick}>
      <p className="movies-card__description">{movie.nameRU}</p>
      <p className="movies-card__duration">{`${movie.duration} минут`}</p>
      <img src={movie.image} alt={`Постер к фильму ${movie.nameRU}`} className="mvoies-card__poster" />
      <button type="button"
        className={actionClassName}
        onClick={handleButtonClick} />
    </article>
  )
}
