import {createAction} from '@reduxjs/toolkit';
import {CityEnum} from '../types/city.enum.ts';
import {OfferType} from '../types/offer.type.ts';
import {ReviewType} from '../types/review.type.ts';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {AuthInfo} from '../types/auth-info.ts';

export const changeCity = createAction<{city: CityEnum}>('changeCity');

export const setAllOffers = createAction<{offers: OfferType[]}>('setAllOffers');
export const setLoadingStatus = createAction<boolean>('setLoadingStatus');

export const setDetailedOffer = createAction<OfferType>('setDetailedOffer');
export const setNearbyOffers = createAction<{offers: OfferType[]}>('setNearbyOffers');
export const setReviews = createAction<{reviews: ReviewType[]}>('setReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setUserData = createAction<AuthInfo | null>('setUserData');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
