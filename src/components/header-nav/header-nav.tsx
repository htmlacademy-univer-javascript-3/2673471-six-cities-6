import {Link} from 'react-router-dom';
import {memo} from 'react';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions.ts';

type HeaderNavProps = {
  favoriteCount: number;
}

function HeaderNav({favoriteCount}: HeaderNavProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const handleSignOut = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  if (authorizationStatus === AuthorizationStatus.Auth && userData) {
    return (
      <ul className='header__nav-list'>
        <li className='header__nav-item user'>
          <Link to={AppRoute.Favourites} className='header__nav-link header__nav-link--profile'>
            <div className='header__avatar-wrapper user__avatar-wrapper'>
            </div>
            <span className='header__user-name user__name'>{userData.email}</span>
            <span className='header__favorite-count'>{favoriteCount}</span>
          </Link>
        </li>
        <li className='header__nav-item'>
          <Link
            to={AppRoute.Login}
            className='header__nav-link'
            onClick={handleSignOut}
          >
            <span className='header__signout'>Sign out</span>
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className='header__nav-list'>
      <li className='header__nav-item user'>
        <Link className='header__nav-link header__nav-link--profile' to={AppRoute.Login}>
          <div className='header__avatar-wrapper user__avatar-wrapper'/>
          <span className='header__login'>Sign in</span>
        </Link>
      </li>
    </ul>
  );
}

export default memo(HeaderNav);
