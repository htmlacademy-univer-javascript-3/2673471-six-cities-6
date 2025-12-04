import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

const getOffersState = (state: State) => state[NameSpace.Offers];
export const getCity = createSelector(getOffersState, (state) => state.city);
export const getOffers = createSelector(getOffersState, (state) => state.offers);
export const getDetailedOffer = createSelector(getOffersState, (state) => state.detailedOffer);
export const getNearbyOffers = createSelector(getOffersState, (state) => state.nearbyOffers);
export const getOffersLoadingStatus = createSelector(getOffersState, (state) => state.isDataLoading);
