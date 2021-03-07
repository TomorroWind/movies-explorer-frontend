import react from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Form from '../Form/Form';
import { NameFormPattern, NameFormPatternMessage, ProfileUpdated } from '../../utils/const';
import { CurrentUserContext } from '../../context/CurrentUserContext';

export default function Profile(props) {
  const { loggedIn, onLogout, onProfileUpdate } = props;

  const currentUser = react.useContext(CurrentUserContext);

  const [name, setName] = react.useState('');
  const [email, setEmail] = react.useState('');
  const [errors, setErrors] = react.useState({});
  const [formIsValid, setFormIsValid] = react.useState(false);
  const [editMode, setEditMode] = react.useState(false);
  const [infoMessage, setInfoMesage] = react.useState('');

  react.useEffect(() => {
    if (currentUser.email) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  react.useEffect(() => {
    if (infoMessage) {
      setInfoMesage('');
    }
  }, [editMode, name, email]);

  react.useEffect(() => {
    setFormIsValid(checkFormValidity());
  }, [name, email, errors]);

  const checkFormValidity = () => {
    let valid = !Object.values(errors).some((error) => error);
    valid = valid && (currentUser.name !== name || currentUser.email !== email);

    return valid;
  }

  const processInputValidity = (name, validationMessage) => {
    const newErrors = { ...errors, [name]: validationMessage };
    delete newErrors.submit;
    setErrors(newErrors);
  }

  const handleNameChange = (e) => {
    if (!editMode) { return; }

    setName(e.target.value);
    processInputValidity(e.target.name, e.target.validationMessage);
  }

  const handleEmailChange = (e) => {
    if (!editMode) { return; }

    setEmail(e.target.value);
    processInputValidity(e.target.name, e.target.validationMessage);
  }

  const handleEditClick = (e) => {
    e.preventDefault();

    setEditMode(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onProfileUpdate(name, email)
      .then(() => {
        setEditMode(false);
        setInfoMesage(ProfileUpdated);
      })
      .catch((err) => {
        const newErrors = { ...errors, submit: err.message };
        setErrors(newErrors);
        setFormIsValid(checkFormValidity(newErrors));
      })
  }

  return (
    <>
      <Header loggedIn={loggedIn} onLogout={onLogout} />
      <Form title={`Привет, ${currentUser.name ?? ''}!`} name="profile-form" onSubmit={handleSubmit}
        fields={(
          <>
            <div className="form__field-container">
              <input type="text" placeholder="Ivan" name="name" id="name" className="form__field"
                required pattern={NameFormPattern} title={NameFormPatternMessage}
                value={name} onChange={handleNameChange} />
              <label htmlFor="name" className="form__label">Имя</label>
              <span
                className={'form__field-error' + (errors.name ? ' form__field-error_visible' : '')}
                id="name-error">{NameFormPatternMessage}</span>
            </div>
            <div className="form__field-container">
              <label htmlFor="email" className="form__label">Почта</label>
              <input type="email" placeholder="email@example.com" name="email" id="email" className="form__field"
                required
                value={email} onChange={handleEmailChange} />
              <span
                className={'form__field-error' + (errors.email ? ' form__field-error_visible' : '')}
                id="email-error">{errors.email}</span>
            </div>
          </>
        )}
        buttons={(
          <>
            {infoMessage && (<p className="form__info">{infoMessage}</p>)}
            {errors.submit && (<p className="form__error">{errors.submit}</p>)}
            {editMode &&
              <button type="submit"
                className={'form__submit' + (!formIsValid ? ' form__submit_disabled' : '')}
              >Сохранить</button>
            }
            {!editMode &&
              (<>
                <Link className="form__edit" to="#" onClick={handleEditClick}>Редактировать</Link>
                <Link className="form__exit" to="/" onClick={onLogout}>Выйти из аккаунта</Link>
              </>
              )}
          </>
        )}
      />
    </>
  )
}
