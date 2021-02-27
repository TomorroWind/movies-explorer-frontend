import './Form.css';
import logo from '../../images/logo.svg';


export default function FormData(props) {
  const { title, name, showLogo, fields, buttons } = props;

  let formStyles = 'form section';
  let containerStyles = 'container form__container';
  let titleStyles = 'form__title';
  let fieldsetStyles = 'form__fieldset';
  let btnGroupStyles = 'form__btn-group';

  if (showLogo) {
    formStyles += ' form_style_with-logo';
    containerStyles += ' container_size_xs form__container_style_with-logo';
    titleStyles += ' form__title_style_with-logo';
    fieldsetStyles += ' form__fieldset_style_with-logo';
    btnGroupStyles += ' form__btn-group_style_with-logo'
  } else {
    containerStyles += ' container_size_s';
  }


  return (
    <section className={formStyles}>
      <form method="POST" action="#" name={name} className={containerStyles}>
        {showLogo && <a href="/" className="form__logo"><img src={logo} alt="Логотип" /></a>}
        <h1 className={titleStyles}>{title}</h1>
        <fieldset className={fieldsetStyles}>
          {fields}
        </fieldset>
        <div className={btnGroupStyles}>
          {buttons}
        </div>
      </form>
    </section>
  );
}
