import react, { useEffect } from 'react';
import { ServerConnectionError, NothingFound, SaveMovieError, UnsaveMovieError, KeyWordsRequired } from '../../utils/const';
import { BeatMoviesFactory, LocalMoviesFactory } from '../../utils/MoviesFactory';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Placeholder from '../Placeholder/Placeholder';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies(props) {
  const { loggedIn, saved } = props;

  const [isLoading, setIsLoading] = react.useState(false);
  const [movies, setMovies] = react.useState(undefined);
  const [message, setMessage] = react.useState('');
  const [savedMovieIds, setSavedMovieIds] = react.useState(new Map());

  useEffect(() => {
    if (saved) {
      searchMovies(null);
    } else {
      setMessage('');
      setMovies(undefined);
    }

  }, [saved]);


  const getFactory = () => {
    return saved ? LocalMoviesFactory : BeatMoviesFactory;
  }

  const searchMovies = (filters) => {
    setMessage('');
    setIsLoading(true);

    getFactory().createGetter().getMovies()
      .then((movies) => wrapMovies(movies))
      .then((movies) => applyFilters(movies, filters))
      .then((movies) => getSavedMovieIds(movies))
      .catch(() => {
        setMessage(ServerConnectionError)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const wrapMovies = (movies) => {
    return (movies && movies.length) ? movies.map(m => getFactory().createMovie(m)) : null;
  }

  const applyFilters = (movies, filters, showMessage = true) => {
    if (!filters) {
      setMovies(movies);
      return movies;
    }

    const filteredMovies = getFactory().createFilterer(movies, filters).filter();

    setMovies(filteredMovies && filteredMovies.length ? filteredMovies : null);

    if (showMessage) {
      setMessage(filteredMovies && filteredMovies.length ? '' : NothingFound);
    }

    return movies;
  }

  const getSavedMovieIds = (movies) => {
    return (saved ? Promise.resolve(movies) : LocalMoviesFactory.createGetter().getMovies())
      .then((savedMovies) => {
        if (savedMovies) {
          setSavedMovieIds(new Map(savedMovies.map((m) => [m.movieId, m._id])));
        }
        return savedMovies;
      })
  }

  const handleFilterChange = (filters) => {
    return filters.keyWords || saved ? searchMovies(filters) : [];
  };

  const handleMoviesSearchSubmit = (filters) => {
    if (!saved && !filters?.keyWords) {
      setMessage(KeyWordsRequired);
      return;
    }

    searchMovies(filters);
  }

  const handleSaveMovie = (movie) => {
    setMessage('');

    LocalMoviesFactory.createSaver().save(movie)
      .then((savedMovie) => {
        setSavedMovieIds(new Map([...savedMovieIds, [savedMovie.movieId, savedMovie._id]]))
      })
      .catch(() => {
        setMessage(SaveMovieError);
      });
  }

  const handleUnsaveMovie = (movie) => {
    setMessage('');

    LocalMoviesFactory.createSaver().unsave(savedMovieIds.get(movie.movieId))
      .then((unsavedMovie) => {
        const updatedIds = new Map(savedMovieIds);
        updatedIds.delete(unsavedMovie.movieId);
        setSavedMovieIds(updatedIds);

        if (saved) {
          setMovies(movies.filter((m) => m.movieId !== unsavedMovie.movieId));
        }
      })
      .catch((err) => {
        setMessage(UnsaveMovieError);
      });
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm onSubmit={handleMoviesSearchSubmit} onFilterChange={handleFilterChange} />
      {!isLoading && (message || !movies) && <Placeholder message={message} />}
      {isLoading && (<Preloader />)}
      {!isLoading && movies && (<MoviesCardList
        saved={saved}
        movies={movies}
        savedMovieIds={savedMovieIds}
        onSave={handleSaveMovie}
        onUnsave={handleUnsaveMovie}
      />)}
      <Footer />
    </>
  )
}
