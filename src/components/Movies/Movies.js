import react from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies(props) {

  const [isLoaded, setIsLoaded] = react.useState(false);

  react.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  });

  return (
    <>
      <Header loggedIn={true} />
      <SearchForm />
      {!isLoaded && (<Preloader />)}
      {isLoaded && (<MoviesCardList saved={props.saved} />)}
      <Footer />
    </>
  )
}
