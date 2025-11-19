import {createReducer} from '@reduxjs/toolkit';
import {CityEnum} from '../types/city.enum.ts';
import {OfferType} from '../types/offer.type.ts';
import {changeCity, fillListOffers} from './action.ts';
import {getOffersByCity} from '../const.ts';

const initialState: { city: CityEnum; offers: OfferType[] } = {
  city: CityEnum.Paris,
  offers: getOffersByCity(CityEnum.Paris),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillListOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});
