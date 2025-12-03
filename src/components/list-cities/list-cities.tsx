import {Link} from 'react-router-dom';
import cn from 'classnames';
import {AppRoute} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {CityEnum} from '../../types/city.enum.ts';
import {changeCity} from '../../store/action.ts';
import {CITIES} from '../../types/location.type.ts';
import {memo} from "react";

function ListCities(): JSX.Element {
  const city = useAppSelector((state) => state.city);
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
