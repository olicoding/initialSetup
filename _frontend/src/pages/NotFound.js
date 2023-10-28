import "../styles/pages/not-found.scss";

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Oops!</h1>
      <p className="not-found__text">Page Not Found - you got a 404 ...</p>

      <a href="/" className="not-found__button">
        home
      </a>
    </div>
  );
}

export default NotFound;
