import Logo from '../../components/logo/logo.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import HeaderNav from '../../components/header-nav/header-nav.tsx';

export default function MainEmpty() {
  return (
    <div className='page page--gray page--main'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo />
            </div>
            <nav className='header__nav'>
              <HeaderNav />
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--index page__main--index-empty'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link to={AppRoute.Main} className="locations__item-link tabs__item">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={AppRoute.Main} className="locations__item-link tabs__item">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={AppRoute.Main} className="locations__item-link tabs__item">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={AppRoute.Main} className="locations__item-link tabs__item">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={AppRoute.Main} className="locations__item-link tabs__item">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={AppRoute.Main} className="locations__item-link tabs__item">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container cities__places-container--empty container'>
            <section className='cities__no-places'>
              <div className='cities__status-wrapper tabs__content'>
                <b className='cities__status'>No places to stay available</b>
                <p className='cities__status-description'>We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className='cities__right-section'></div>
          </div>
        </div>
      </main>
    </div>
  );
}
