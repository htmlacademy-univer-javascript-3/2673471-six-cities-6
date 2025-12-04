import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';
import {CityEnum} from '../../types/city.enum.ts';
import {OfferType} from '../../types/offer.type.ts';

const getFavoritesState = (state: State) => state[NameSpace.Favorites];

export const getFavoriteOffers = createSelector(getFavoritesState, (state) => state.favoriteOffers);
export const getFavoritesLoadingStatus = createSelector(getFavoritesState, (state) => state.isFavoritesLoading);
export const getGroupedFavoriteOffers = createSelector([getFavoriteOffers], (favorites) => (
  favorites.reduce<Record<CityEnum, OfferType[]>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {} as Record<CityEnum, OfferType[]>))
);
