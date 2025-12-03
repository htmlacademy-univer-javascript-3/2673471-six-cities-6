import {useCallback, useMemo, useState} from 'react';
import Logo from '../../components/logo/logo.tsx';
import HeaderNav from '../../components/header-nav/header-nav.tsx';
import {OfferType} from '../../types/offer.type.ts';
import ListOffers from '../../components/list-offers/list-offers.tsx';
import Map from '../../components/map/map.tsx';
import ListCities from '../../components/list-cities/list-cities.tsx';
import {useAppSelector} from '../../hooks';
import SortingOptions from '../../components/sorting-options/sorting-options.tsx';
import {SortOption, SortOptionType} from '../../types/sortOption.type.ts';
import {getFavorites, sortOffersByOption} from '../../const.ts';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.tsx';

export default function MainScreen(): JSX.Element {
  const [selectedOfferId, setSelectedOffer] = useState<OfferType['id'] | null>(null);
  const [selectedSortOption, setSelectedSortOption] = useState<SortOptionType>(SortOption.Popular);

  const handleCardHover = useCallback((offerId: OfferType['id'] | null) => {
    setSelectedOffer(offerId);
  }, []);

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const allOffers = useAppSelector((state) => state.allOffers);
  const favoriteCount = getFavorites(allOffers).length;
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  const sortOffers = useMemo(() =>
    sortOffersByOption(offers, selectedSortOption),
  [offers, selectedSortOption]
  );

  if (isDataLoading) {
    return <LoadingSpinner/>;
  }

  return (
    <div className='page page--gray page--main'>
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

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <ListCities/>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offers.length} places to stay in {city}</b>
              <SortingOptions
                onChangeSortOption={setSelectedSortOption}
                currentOption={selectedSortOption}
              />
              <div className='cities__places-list places__list tabs__content'>
                <ListOffers
                  offers={sortOffers}
                  block='cities'
                  size='large'
                  onCardHover={handleCardHover}
                />
              </div>
            </section>
            <div className='cities__right-section'>
              <Map
                offers={offers}
                city={city}
                selectedOfferId={selectedOfferId}
                block='cities'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
