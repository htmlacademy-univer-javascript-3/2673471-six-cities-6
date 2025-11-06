import {Offer} from '../../types/offer.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {CityEnum} from '../../types/city.enum.ts';
import FavoriteCard from '../favorite-card/favorite-card.tsx';

type ListFavoritesProps = {
  favourites: Offer[];
}

export default function ListFavorites({favourites}: ListFavoritesProps) {
  const groupedByCity = favourites.reduce<Record<CityEnum, Offer[]>>((acc, offer) => {
    const city = offer.city.cityName;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {} as Record<CityEnum, Offer[]>);
  return (
    <>
      {Object.entries(groupedByCity).map(([city, offers]) => (
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
              <FavoriteCard key={offer.id} favorite={offer}/>
            ))}
          </div>
        </li>
      ))}
    </>
  );
}
