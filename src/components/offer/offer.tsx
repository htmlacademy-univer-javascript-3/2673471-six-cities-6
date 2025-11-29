import {Link} from 'react-router-dom';
import {AppRoute, getStars} from '../../const.ts';
import {OfferType} from '../../types/offer.type.ts';

export type OfferBlockStyle = 'cities' | 'near-places' | 'favorites';
export type OfferImageSize = 'small' | 'large';
type OfferProps = {
  offer: OfferType;
  block: OfferBlockStyle;
  sizeImage: OfferImageSize;
}
const sizeImageRecord: Record<OfferImageSize, {width: string; height: string}> = {
  small: { width: '150', height: '110'},
  large: { width: '260', height: '200'}
};

export default function Offer({offer, block, sizeImage}: OfferProps) {
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
          <img className='place-card__image' src={offer.previewImage} {...sizeImageRecord[sizeImage]} alt={offer.title}/>
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
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}
