import {Navigate, useParams} from 'react-router-dom';
import {memo, useCallback, useEffect, useMemo} from 'react';
import {AppRoute, getStars} from '../../const.ts';
import Logo from '../../components/logo/logo.tsx';
import HeaderNav from '../../components/header-nav/header-nav.tsx';
import ListReviews from '../../components/list-reviews/list-reviews.tsx';
import Map from '../../components/map/map.tsx';
import {MemoizedListOffers} from '../../components/list-offers/list-offers.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.tsx';
import {
  fetchDetailedOfferAction,
  fetchNearbyOffersAction,
  fetchReviewsAction,
  postFavoriteAction
} from '../../store/api-actions.ts';
import {getAuthorizationStatus} from "../../store/user/selectors.ts";
import {getDetailedOffer, getNearbyOffers} from "../../store/offers/selectors.ts";
import {getReviews} from "../../store/reviews/selectors.ts";
import {getFavoriteOffers, getFavoritesLoadingStatus} from "../../store/favorites/selectors.ts";


function OfferScreen() {
  const {offerId} = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offer = useAppSelector(getDetailedOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getReviews);
  const favoriteCount = useAppSelector(getFavoriteOffers).length;
  const isFavoritesLoading = useAppSelector(getFavoritesLoadingStatus);

  const handleCardHover = useCallback(() => null, []);
  const handleFavoriteClick = useCallback(() => {
    if (offer) {
      dispatch(postFavoriteAction({
        offerId: offer.id,
        status: offer.isFavorite ? 0 : 1,
      }));
    }
  }, [offer]);


  const mapOffers = useMemo(() => (offer ? [...nearbyOffers, offer] : nearbyOffers), [nearbyOffers, offer]);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchDetailedOfferAction(offerId))
        .unwrap()
        .then((detailOffer) => {
          if (detailOffer) {
            dispatch(fetchNearbyOffersAction(offerId));
            dispatch(fetchReviewsAction(offerId));
          }
        });
    }
  }, [offerId, dispatch]);
  if (!offerId) {
    return <Navigate to={AppRoute.NotFound}/>;
  }
  if (!offer || offer.id !== offerId || isFavoritesLoading) {
    return <LoadingSpinner/>;
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
              {offer.images?.map((image) => (
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
                <button
                  className={`offer__bookmark-button button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type='button'
                  onClick={handleFavoriteClick}
                >
                  <svg className='offer__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <span style={{width: `${getStars(offer.rating)}%`}}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>{offer.rating}</span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>
                  {offer.type}
                </li>
                <li className='offer__feature offer__feature--bedrooms'>
                  {offer.bedrooms} Bedrooms
                </li>
                <li className='offer__feature offer__feature--adults'>
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>&euro;{offer.price}</b>
                <span className='offer__price-text'>&nbsp;night</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&apos;s inside</h2>
                <ul className='offer__inside-list'>
                  {offer.goods?.map((good) => (
                    <li className='offer__inside-item' key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='offer__host'>
                <h2 className='offer__host-title'>Meet the host</h2>
                <div className='offer__host-user user'>
                  <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='offer__avatar user__avatar'
                      src={offer.host?.avatarUrl}
                      width='74' height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='offer__user-name'>
                    {offer.host?.name}
                  </span>
                  {
                    offer.host?.isPro &&
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
              <ListReviews offerId={offerId} reviews={reviews} authorizationStatus={authorizationStatus}/>
            </div>
          </div>
          <Map
            offers={mapOffers}
            city={offer?.city.name}
            selectedOfferId={offer.id}
            block={'offer'}
          />
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <MemoizedListOffers offers={nearbyOffers} block='near-places' size='large' onCardHover={handleCardHover}
                                className='near-places__list places__list'/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default memo(OfferScreen);
