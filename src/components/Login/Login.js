import '../Register/Register.css';
import react from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

export default function Login(props) {
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
      <Form title={'Рады видеть!'} name="login-form" showLogo={true}
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
          </>
        )}
        buttons={(
          <>
            <button type="submit" className="form__submit">Зарегестрироваться</button>
            <p className="form__link-description">Ещё не зарегистрированы? <Link to="/signup" className="form__link">Регистрация</Link></p>
          </>
        )}
      />
    </>
  )
}
