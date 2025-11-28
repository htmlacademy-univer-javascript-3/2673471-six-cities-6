import {createAction} from '@reduxjs/toolkit';
import {CityEnum} from '../types/city.enum.ts';
import {OfferType} from '../types/offer.type.ts';
import {ReviewType} from '../types/review.type.ts';

export const changeCity = createAction<{city: CityEnum}>('changeCity');

export const setAllOffers = createAction<{offers: OfferType[]}>('setAllOffers');
export const setLoadingStatus = createAction<boolean>('setLoadingStatus');

export const setDetailedOffer = createAction<OfferType>('setDetailedOffer');
export const setNearbyOffers = createAction<{offers: OfferType[]}>('setNearbyOffers');
export const setReviews = createAction<{reviews: ReviewType[]}>('setReviews');
