import './MoviesCardList.css';
import joker from '../../images/Joker.jpeg';
import poster2 from '../../images/poster-2.jpg';
import MoviesCard from "../MovieCard/MoviesCard";

export default function MoviesCardList(props) {
  const movies = Array.from({ length: props.saved ? 3 : 12 }, (v, k) => k);

  return (
    <section className="movies-card-list section">
      <div className="container container_size_l">
        <div className="movies-card-list__container">
          {
            movies.map((value, index) => (
              <MoviesCard key={index}
                poster={index % 2 === 0 ? joker : poster2}
                actionState={props.saved ? 'movies-card__action_type_delete'
                  : index % 2 === 0 ? 'movies-card__action_type_unsave' : 'movies-card__action_type_save'} />
            ))
          }
        </div>
        {!props.saved && (<button type="button" className="movies-card-list__more">Ещё</button>)}
      </div>

    </section>
  )
}
