import './Placeholder.css';

export default function Placeholder(props) {
  return (
    <section className="placeholder section">
      <div className="container container_size_l">
        <div className="placeholder__container">
          <p className="placeholder__message">{props.message}</p>
        </div>
      </div>
    </section>
  )
}
