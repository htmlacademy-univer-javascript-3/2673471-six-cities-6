import {createReducer} from '@reduxjs/toolkit';
import {CityEnum} from '../types/city.enum.ts';
import {OfferType} from '../types/offer.type.ts';
import {
  changeCity,
  setAllOffers,
  setReviews,
  setDetailedOffer,
  setLoadingStatus,
  setNearbyOffers,
  requireAuthorization, setUserData
} from './action.ts';
import {ReviewType} from '../types/review.type.ts';
import {AuthorizationStatus, getOffersByCity} from '../const.ts';
import {AuthInfo} from '../types/auth-info.ts';
import {postReviewAction} from './api-actions.ts';

const initialState: {
  city: CityEnum;
  allOffers: OfferType[];
  offers: OfferType[];
  isDataLoading: boolean;
  reviews: ReviewType[];
  detailedOffer: OfferType;
  nearbyOffers: OfferType[];
  authorizationStatus: AuthorizationStatus;
  userData: AuthInfo | null;
} = {
  city: CityEnum.Paris,
  allOffers: [],
  offers: [],
  reviews: [],
  isDataLoading: true,
  detailedOffer: {} as OfferType,
  nearbyOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.offers = getOffersByCity(state.allOffers, state.city);
    })
    .addCase(setAllOffers, (state, action) => {
      state.allOffers = action.payload.offers;
      state.offers = getOffersByCity(state.allOffers, state.city);
    })
    .addCase(setDetailedOffer, (state, action) => {
      state.detailedOffer = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.offers;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(postReviewAction.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
    });
});
