import AbooutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

export default function Main(props) {
  return (
    <>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AbooutMe />
      <Portfolio />
      <Footer />
    </>
  )
}
