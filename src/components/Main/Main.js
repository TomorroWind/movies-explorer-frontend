import { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import AbooutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <Promo />
      <AboutProject />
      <Techs />
      <AbooutMe />
      <Portfolio />
      <Footer />
    </>
  )
}
