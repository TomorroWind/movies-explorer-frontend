import './MoviesCardList.css';
import MoviesCard from "../MovieCard/MoviesCard";
import { useEffect, useState } from 'react';
import { MovieViewerConfig, ResizeRedrawTimeout } from '../../utils/config';

export default function MoviesCardList(props) {
  const { movies, onSave, savedMovieIds, onUnsave, saved } = props;

  const [showedMovies, setShowedMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [currentThreshold, setCurrentThreshold] = useState({});

  useEffect(() => {
    function handleWindowsResize() {
      if (saved) { return; }

      setTimeout(function () {
        const screenConfig = getThresholdConfig(getScreenWidth());

        if (screenConfig.threshold !== currentThreshold.threshold) {
          setCurrentThreshold(screenConfig);
          showMore(screenConfig, true);
        }
      }, ResizeRedrawTimeout);
    }

    window.addEventListener('resize', handleWindowsResize);

    return function () {
      window.removeEventListener('resize', handleWindowsResize)
    }
  })

  useEffect(() => {
    const screenConfig = getThresholdConfig(getScreenWidth());
    setCurrentThreshold(screenConfig);
    showMore(screenConfig, true);
  }, [movies]);


  const showMore = (screenConfig, clean = false) => {
    if (saved) {
      setShowedMovies(movies);
      return;
    }

    let currentShowedCount = 0;

    if (!clean) {
      currentShowedCount = showedMovies.length;
    }

    let showedMoviesCount = currentShowedCount ? currentShowedCount + screenConfig.moreCount : screenConfig.initCount;
    showedMoviesCount = Math.min(showedMoviesCount, movies.length);

    setShowedMovies(movies.filter((m, i) => i < showedMoviesCount));
    setHasMore(showedMoviesCount < movies.length);
  }

  const getThresholdConfig = (width) => {
    return MovieViewerConfig.find((c) => width >= c.threshold);
  }

  const getScreenWidth = () => {
    return window.innerWidth;
  }

  const hadnelShowMoreClick = (e) => {
    e.preventDefault();

    showMore(currentThreshold);
  }

  return (
    <section className="movies-card-list section">
      <div className="container container_size_l">
        <div className="movies-card-list__container">
          {
            showedMovies.map((movie) => (
              <MoviesCard key={movie.movieId}
                movie={movie}
                isSaved={savedMovieIds.has(movie.movieId)}
                viewSavedAsChecked={!saved}
                onSave={onSave}
                onUnsave={onUnsave} />
            ))
          }
        </div>
        {hasMore && (<button type="button" className="movies-card-list__more" onClick={hadnelShowMoreClick}>Ещё</button>)}
      </div>

    </section>
  )
}
