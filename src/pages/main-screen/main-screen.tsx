import Logo from '../../components/logo/logo.tsx';
import {AppRoute} from '../../const.ts';
import {Link} from 'react-router-dom';
import HeaderNav from '../../components/header-nav/header-nav.tsx';
import {Offer} from '../../types/offer.ts';
import ListCards from '../../components/list-cards/list-cards.tsx';
import Map from '../../components/map/map.tsx';
import {city} from '../../mocks/city.ts';
import {useState} from 'react';

type MainProps = {
  offers: Offer[];
  favoriteCount: number;
}

export default function MainScreen(props: MainProps): JSX.Element {
  const [selectedOfferId, setSelectedOffer] = useState<Offer['id'] | null>(null);
  const handleCardHover = (offerId: Offer['id'] | null) => {
    setSelectedOffer(offerId);
  };
  return (
    <div className='page page--gray page--main'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo/>
            </div>
            <nav className='header__nav'>
              <HeaderNav favoriteCount={props.favoriteCount}/>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <Link to={AppRoute.Main} className='locations__item-link tabs__item'>
                  <span>Paris</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link to={AppRoute.Main} className='locations__item-link tabs__item'>
                  <span>Cologne</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link to={AppRoute.Main} className='locations__item-link tabs__item'>
                  <span>Brussels</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link to={AppRoute.Main} className='locations__item-link tabs__item'>
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link to={AppRoute.Main} className='locations__item-link tabs__item'>
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link to={AppRoute.Main} className='locations__item-link tabs__item'>
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{props.offers.length} places to stay in Amsterdam</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by </span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li className='places__option places__option--active' tabIndex={0}>Popular</li>
                  <li className='places__option' tabIndex={0}>Price: low to high</li>
                  <li className='places__option' tabIndex={0}>Price: high to low</li>
                  <li className='places__option' tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className='cities__places-list places__list tabs__content'>
                <ListCards
                  offers={props.offers}
                  block={'cities'}
                  size={'large'}
                  onCardHover={handleCardHover}
                />
              </div>
            </section>
            <div className='cities__right-section'>
              <Map
                offers={props.offers}
                city={city}
                selectedOfferId={selectedOfferId}
                block='cities'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
