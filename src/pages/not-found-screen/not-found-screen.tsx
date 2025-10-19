import {Link} from 'react-router-dom';
import './not-found.css';
import {AppRoute} from '../../const.ts';

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-status">Not Found</h2>
        <Link to={AppRoute.Main} className="not-found-home-link">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
