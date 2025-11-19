import {createAction} from '@reduxjs/toolkit';
import {CityEnum} from '../types/city.enum.ts';
import {OfferType} from '../types/offerType.ts';

export const changeCity = createAction<{city: CityEnum}>('changeCity');
export const fillListOffers = createAction<{offers: OfferType[]}>('fillListOffers');
