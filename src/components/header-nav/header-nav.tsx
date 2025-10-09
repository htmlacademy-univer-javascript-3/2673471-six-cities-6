﻿import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

export default function HeaderNav() {
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.Favourites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link to={AppRoute.Login} className="header__nav-link">
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}
