import Logo from '../../components/logo/logo.tsx';
import HeaderNav from '../../components/header-nav/header-nav.tsx';
import {AppRoute} from '../../const.ts';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer.ts';
import {CityEnum} from '../../types/city.enum.ts';
import Card from '../../components/card/card.tsx';

type FavoritesPageProps = {
  favorites: Offer[];
}
export default function FavoritesScreen({favorites}: FavoritesPageProps): JSX.Element {
  const groupedByCity = favorites.reduce<Record<CityEnum, Offer[]>>((acc, offer) => {
    const city = offer.city.cityName;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {} as Record<CityEnum, Offer[]>);
  const listFavorites = Object.entries(groupedByCity).map(([city, offers]) => (
    <li className='favorites__locations-items' key={city}>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <Link to={AppRoute.Main} className='locations__item-link'>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className='favorites__places'>
        {offers.map((offer) => (
          <Card offer={offer} key={city} block={'favorites'} sizeImage={'small'}></Card>
        ))}
      </div>
    </li>
  ));
  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo/>
            </div>
            <nav className='header__nav'>
              <HeaderNav favoriteCount={favorites.length}/>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {listFavorites}
            </ul>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <Link to={AppRoute.Main} className='footer__logo-link'>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33'/>
        </Link>
      </footer>
    </div>
  );
}
