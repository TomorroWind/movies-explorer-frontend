import '../Register/Register.css';
import react from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

export default function Login(props) {
  const { onSubmit } = props;

  const [errors, setErrors] = react.useState({});
  const [email, setEmail] = react.useState('');
  const [password, setPassword] = react.useState('');
  const [formIsValid, setFormIsValid] = react.useState(false);

  react.useEffect(() => {
    setFormIsValid(checkFormValidity());
  }, [email, password, errors]);

  const checkFormValidity = () => {
    let valid = !Object.values(errors).some((error) => error);
    valid = valid && email && password;

    return valid;
  }

  const processInputValidity = (name, validationMessage) => {
    const newErrors = { ...errors, [name]: validationMessage };
    delete newErrors.submit;
    setErrors(newErrors);
    setFormIsValid(checkFormValidity(newErrors));
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    processInputValidity(e.target.name, e.target.validationMessage);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    processInputValidity(e.target.name, e.target.validationMessage);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password)
      .catch((err) => {
        const newErrors = { ...errors, submit: err.message };
        setErrors(newErrors);
        setFormIsValid(checkFormValidity(newErrors));
      });
  }

  return (
    <>
      <Form title={'Рады видеть!'} name="login-form" showLogo={true} onSubmit={handleSubmit}
        fields={(
          <>
            <div className="form__input-container">
              <label htmlFor="email" className="form__input-label">Почта</label>
              <input type="email" placeholder="email@example.com" name="email" id="email" className="form__input"
                required
                value={email} onChange={handleEmailChange} />
              <span
                className={'form__input-error' + (errors.email ? ' form__input-error_visible' : '')}
                id="email-error">{errors.email}</span>
            </div>
            <div className="form__input-container">
              <label htmlFor="password" className="form__input-label">Пароль</label>
              <input type="password" name="password" id="password" className="form__input"
                required
                value={password} onChange={handlePasswordChange} />
              <span
                className={'form__input-error' + (errors.password ? ' form__input-error_visible' : '')}
                id="password-error">{errors.password}</span>
            </div>
          </>
        )}
        buttons={(
          <>
            {errors.submit && (<p className="form__error">{errors.submit}</p>)}
            <button type="submit" className={'form__submit' + (!formIsValid ? ' form__submit_disabled' : '')}>Войти</button>
            <p className="form__link-description">Ещё не зарегистрированы? <Link to="/signup" className="form__link">Регистрация</Link></p>
          </>
        )}
      />
    </>
  )
}
