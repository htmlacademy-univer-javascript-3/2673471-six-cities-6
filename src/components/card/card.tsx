import {Link} from 'react-router-dom';
import {AppRoute, getStars} from '../../const.ts';
import {Offer} from '../../types/offer.ts';

export type CardBlockStyle = 'cities' | 'near-places' | 'favorites';
export type CardImageSize = 'small' | 'large';
type CardProps = {
  offer: Offer;
  block: CardBlockStyle;
  sizeImage: CardImageSize;
}
const sizeImageRecord: Record<CardImageSize, {width: string; height: string}> = {
  small: { width: '150', height: '110'},
  large: { width: '260', height: '200'}
};

export default function Card({offer, block, sizeImage}: CardProps) {
  return (
    <article className={`${block}__card place-card`}>
      {
        offer.isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      }
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className='place-card__image' src={offer.images[0]} {...sizeImageRecord[sizeImage]} alt={offer.title}/>
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: `${getStars(offer.rating)}%`}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className='place-card__type'>{offer.housingType}</p>
      </div>
    </article>
  );
}
