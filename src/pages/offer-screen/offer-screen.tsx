﻿import {Offer} from '../../types/offer.ts';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import Logo from '../../components/logo/logo.tsx';
import HeaderNav from '../../components/header-nav/header-nav.tsx';
import {Review} from '../../types/review.ts';
import ReviewForm from '../../components/review-form/review-form.tsx';

type OfferScreenProps = {
  offers: Offer[];
  reviews: Review[];
  favoriteCount: number;
}

export default function OfferScreen({offers, favoriteCount, reviews}: OfferScreenProps) {
  const {id} = useParams();
  const offer = offers.find((off) => off.id === id);
  if (!offer) {
    return <Navigate to={AppRoute.NotFound}/>;
  }
  return (
    <div className='page'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo/>
            </div>
            <nav className='header__nav'>
              <HeaderNav favoriteCount={favoriteCount}/>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              {offer.images.map((image) => (
                <div className='offer__image-wrapper' key={image}>
                  <img className='offer__image' src={image} alt='Photo studio'/>
                </div>
              ))}
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {
                offer.isPremium &&
                <div className='offer__mark'>
                  <span>Premium</span>
                </div>
              }
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>
                  {offer.title}
                </h1>
                <button className='offer__bookmark-button button' type='button'>
                  <svg className='offer__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <span style={{width: '80%'}}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>{offer.rating}</span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>
                  {offer.housingType}
                </li>
                <li className='offer__feature offer__feature--bedrooms'>
                  {offer.bedrooms} Bedrooms
                </li>
                <li className='offer__feature offer__feature--adults'>
                  Max {offer.maxGuests} adults
                </li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>&euro;{offer.price}</b>
                <span className='offer__price-text'>&nbsp;night</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&apos;s inside</h2>
                <ul className='offer__inside-list'>
                  {offer.comforts.map((comfort) => (
                    <li className='offer__inside-item' key={comfort}>
                      {comfort}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='offer__host'>
                <h2 className='offer__host-title'>Meet the host</h2>
                <div className='offer__host-user user'>
                  <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                    <img className='offer__avatar user__avatar' src={offer.owner.avatarAuthor} width='74' height='74' alt='Host avatar'/>
                  </div>
                  <span className='offer__user-name'>
                    {offer.owner.nameAuthor}
                  </span>
                  {
                    offer.owner.isPro &&
                    <span className='offer__user-status'>
                    Pro
                    </span>
                  }
                </div>
                <div className='offer__description'>
                  <p className='offer__text'>
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className='offer__reviews reviews'>
                <h2 className='reviews__title'>Reviews &middot;
                  <span className='reviews__amount'>{offer.commentsCount}</span>
                </h2>
                <ul className='reviews__list'>
                  {reviews.filter((review) => review.offerId === offer.id).map((review) => (
                    <li className='reviews__item' key={review.id}>
                      <div className='reviews__user user'>
                        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                          <img className='reviews__avatar user__avatar' src={review.authorAvatar} width='54' height='54' alt='Reviews avatar'/>
                        </div>
                        <span className='reviews__user-name'>
                          {review.authorName}
                        </span>
                      </div>
                      <div className='reviews__info'>
                        <div className='reviews__rating rating'>
                          <div className='reviews__stars rating__stars'>
                            <span style={{width: `${offer.rating * 100 / 5}%`}}></span>
                            <span className='visually-hidden'>Rating</span>
                          </div>
                        </div>
                        <p className='reviews__text'>
                          {review.text}
                        </p>
                        <time className='reviews__time'>{review.postDate}</time>
                      </div>
                    </li>
                  ))}
                </ul>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className='offer__map map'></section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img className='place-card__image' src='img/room.jpg' width='260' height='200' alt='Place image'/>
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;80</b>
                      <span className='place-card__price-text'>&#47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>In bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{width: '80%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Wood and stone place</a>
                  </h2>
                  <p className='place-card__type'>Room</p>
                </div>
              </article>

              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img className='place-card__image' src='img/apartment-02.jpg' width='260' height='200' alt='Place image'/>
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;132</b>
                      <span className='place-card__price-text'>&#47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{width: '80%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Canal View Prinsengracht</a>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>

              <article className='near-places__card place-card'>
                <div className='place-card__mark'>
                  <span>Premium</span>
                </div>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img className='place-card__image' src='img/apartment-03.jpg' width='260' height='200' alt='Place image'/>
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;180</b>
                      <span className='place-card__price-text'>&#47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{width: '100%'}}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
