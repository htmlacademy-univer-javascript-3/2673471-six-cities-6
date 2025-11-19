import {Link} from 'react-router-dom';
import {AppRoute, getOffersByCity} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {CityEnum} from '../../types/city.enum.ts';
import {changeCity, fillListOffers} from '../../store/action.ts';

export default function ListCities(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const handleClick = (newCity: CityEnum) => {
    dispatch(changeCity({city: newCity}));
    dispatch(fillListOffers({offers: getOffersByCity(newCity)}));
  };
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Object.values(CityEnum).map((key) => (
            <li className='locations__item' key={key}>
              <Link
                to={AppRoute.Main}
                className={`locations__item-link tabs__item ${key === city ? 'tabs__item--active' : ''}`}
                onClick={() => handleClick(key as CityEnum)}
              >
                <span>{key}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
