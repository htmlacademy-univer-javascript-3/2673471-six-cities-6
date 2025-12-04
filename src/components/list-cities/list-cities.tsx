import {Link} from 'react-router-dom';
import cn from 'classnames';
import {memo} from 'react';
import {AppRoute} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {CityEnum} from '../../types/city.enum.ts';
import {CITIES} from '../../types/location.type.ts';
import {getCity} from '../../store/offers/selectors.ts';
import {changeCity} from '../../store/offers/offers.ts';

function ListCities(): JSX.Element {
  const city = useAppSelector(getCity);
  const dispatch = useAppDispatch();
  const handleClick = (newCity: CityEnum) => {
    dispatch(changeCity({city: newCity}));
  };
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Object.entries(CITIES).map(([cityName]) => (
            <li className='locations__item' key={cityName}>
              <Link
                to={AppRoute.Main}
                className={cn(
                  'locations__item-link',
                  'tabs__item',
                  {'tabs__item--active' : cityName === city.toString()},)}
                onClick={() => handleClick(cityName as CityEnum)}
              >
                <span>{cityName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(ListCities);
