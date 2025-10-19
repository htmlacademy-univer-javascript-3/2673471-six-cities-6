import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {Offer} from '../../types/offer.ts';

type FavouriteCardProps = {
  favorite: Offer;
}

export default function FavoriteCard({favorite}: FavouriteCardProps) {
  return (
    <article className='favorites__card place-card'>
      {
        favorite.isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      }
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <Link to={`${AppRoute.Offer}/${favorite.id}`}>
          <img className='place-card__image' src={favorite.images[0]} width='150' height='110' alt='Place image'/>
        </Link>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{favorite.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>{favorite.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: `${favorite.rating * 100 / 5}%`}}/>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`${AppRoute.Offer}/${favorite.id}`}>{favorite.title}</Link>
        </h2>
        <p className='place-card__type'>{favorite.housingType}</p>
      </div>
    </article>
  );
}
