import '../Register/Register.css';
import react from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

export default function Register(props) {
  const [name, setName] = react.useState('');
  const [email, setEmail] = react.useState('');
  const [password, setPassword] = react.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <Form title={'Добро пожаловать!'} name="register-form" showLogo={true}
        fields={(
          <>
            <div className="form__input-container">
              <label htmlFor="name" className="form__input-label">Имя</label>
              <input type="text" placeholder="Иван" name="name" id="name" className="form__input"
                required minLength="2" maxLength="200"
                value={name} onChange={handleNameChange} />
              <span className='form__input-error' id="name-error">Что-то пошло не так...</span>
            </div>
            <div className="form__input-container">
              <label htmlFor="email" className="form__input-label">Почта</label>
              <input type="email" placeholder="email@example.com" name="email" id="email" className="form__input"
                required
                value={email} onChange={handleEmailChange} />
              <span className='form__input-error' id="email-error">Что-то пошло не так...</span>
            </div>
            <div className="form__input-container">
              <label htmlFor="password" className="form__input-label">Пароль</label>
              <input type="password" name="password" id="password" className="form__input form__input_state_error"
                required minLength="3"
                value={password} onChange={handlePasswordChange} />
              <span className='form__input-error form__input-error_visible' id="password-error">Что-то пошло не так...</span>
            </div>
          </>
        )}
        buttons={(
          <>
            <button type="submit" className="form__submit">Зарегестрироваться</button>
            <p className="form__link-description">Уже зарегистрированы? <Link to="/signin" className="form__link">Войти</Link></p>
          </>
        )}
      />
    </>
  )
}
