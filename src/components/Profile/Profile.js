import react from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Form from '../Form/Form';

export default function Profile(props) {
  const [name, setName] = react.useState('Виталий');
  const [email, setEmail] = react.useState('pochta@yandex.ru');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <>
      <Header loggedIn={true} />
      <Form title={'Привет, Виталий!'} name="profile-form"
        fields={(
          <>
            <div className="form__field-container">
              <input type="text" placeholder="Иван" name="name" id="name" className="form__field" value={name} onChange={handleNameChange} />
              <label htmlFor="name" className="form__label">Имя</label>
            </div>
            <div className="form__field-container">
              <input type="email" placeholder="email@example.com" name="email" id="email" className="form__field" value={email} onChange={handleEmailChange} />
              <label htmlFor="email" className="form__label">Почта</label>
            </div>
          </>
        )}
        buttons={(
          <>
            <Link className="form__edit" to="#">Редактировать</Link>
            <Link className="form__exit" to="/">Выйти из аккаунта</Link>
          </>
        )}
      />
    </>
  )
}
