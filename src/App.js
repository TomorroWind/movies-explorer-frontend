import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import { mainApi } from './utils/mainApi';
import { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from './context/CurrentUserContext';
import { BeatMoviesFactory, LocalMoviesFactory } from './utils/MoviesFactory';

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const storageToken = localStorage.getItem('token');

    if (storageToken) {
      mainApi.setToken(storageToken);
      getMe()
        .then((json) => {
          setLoggedIn(true);
        })
        .catch(err => {
          mainApi.setToken('');
          localStorage.removeItem('token');
          history.push('/signin');
          console.log(err);
        });
    } else {
      setLoggedIn('');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(currentUser.constructor.name, JSON.stringify(currentUser));
    return function () {
      localStorage.removeItem(currentUser.constructor.name);
    }
  }, [currentUser]);

  const login = (email, password) => {
    return mainApi.login({ email, password })
      .then((json) => {
        localStorage.setItem('token', json.token);
        mainApi.setToken(json.token);
        setLoggedIn(true);
        history.push('/movies');
        return json.token;
      })
      .then(() => getMe())
      .catch((err) => { throw err; })
  }

  const getMe = () => {
    return mainApi.getMe()
      .then((user) => {
        setCurrentUser(user);

        return user;
      })
      .catch((err) => { throw err; })
  }

  const handleRegisterSubmit = (email, password, name) => {
    return mainApi.register({ password, email, name })
      .then(() => {
        return login(email, password);
      })
      .catch((err) => {
        throw err;
      })
  }

  const hadnelLoginSubmit = (email, password) => {
    return login(email, password)
      .catch((err) => { throw err; })
  }

  const handleLogoutSubmit = () => {
    mainApi.setToken('');
    setLoggedIn(false);
    localStorage.removeItem('token');
    setCurrentUser({});

    LocalMoviesFactory.createGetter().cleanUp();
    BeatMoviesFactory.createGetter().cleanUp();
  }

  const handleUpdateProfileSubmit = (name, email) => {
    return mainApi.updateMe({ email, name })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => { throw err; });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>



          <Route path="/signin">
            {loggedIn ? <Redirect to="/" /> : <Login onSubmit={hadnelLoginSubmit} />}
          </Route>
          <Route path="/signup">
            {loggedIn ? <Redirect to="/" /> : <Register onSubmit={handleRegisterSubmit} />}
          </Route>

          <ProtectedRoute component={Movies} path="/movies" loggedIn={loggedIn} />
          <ProtectedRoute component={Movies} path="/saved-movies" saved={true} loggedIn={loggedIn} />
          <ProtectedRoute component={Profile} path="/profile"
            loggedIn={loggedIn} onLogout={handleLogoutSubmit} onProfileUpdate={handleUpdateProfileSubmit} />
          <Route>
            {loggedIn ? <NotFound /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
