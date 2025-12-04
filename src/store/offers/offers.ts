import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OfferType} from '../../types/offer.type.ts';
import {CityEnum} from '../../types/city.enum.ts';
import {getOffersByCity, NameSpace} from '../../const.ts';
import {
  fetchDetailedOfferAction,
  fetchNearbyOffersAction,
  fetchOffersAction, logoutAction,
  postFavoriteAction
} from '../api-actions.ts';

type OffersState = {
  city: CityEnum;
  allOffers: OfferType[];
  offers: OfferType[];
  isDataLoading: boolean;
  detailedOffer: OfferType | null;
  nearbyOffers: OfferType[];
}

const initialState: OffersState = {
  city: CityEnum.Paris,
  allOffers: [],
  offers: [],
  isDataLoading: false,
  detailedOffer: null,
  nearbyOffers: [],
};

type ChangeCityPayload = {
  city: CityEnum;
}

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<ChangeCityPayload>) => {
      state.city = action.payload.city;
      state.offers = getOffersByCity(state.allOffers, state.city);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        state.offers = getOffersByCity(state.allOffers, state.city);
        state.isDataLoading = false;
      })
      .addCase(fetchDetailedOfferAction.fulfilled, (state, action) => {
        state.detailedOffer = action.payload;
      })
      .addCase(fetchDetailedOfferAction.rejected, (state) => {
        state.detailedOffer = null;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const allOffersIndex = state.allOffers.findIndex((offer) => offer.id === updatedOffer.id);
        if (allOffersIndex !== -1) {
          state.allOffers[allOffersIndex] = updatedOffer;
        }

        const offersIndex = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
        if (offersIndex !== -1) {
          state.offers[offersIndex] = updatedOffer;
        }

        if (state.detailedOffer && state.detailedOffer.id === updatedOffer.id) {
          state.detailedOffer = updatedOffer;
        }

        const nearbyIndex = state.nearbyOffers.findIndex((offer) => offer.id === updatedOffer.id);
        if (nearbyIndex !== -1) {
          state.nearbyOffers[nearbyIndex] = updatedOffer;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        const resetFavoriteStatus = (offer: OfferType) => ({
          ...offer,
          isFavorite: false,
        });
        state.allOffers = state.allOffers.map(resetFavoriteStatus);
        if (state.detailedOffer) {
          state.detailedOffer = resetFavoriteStatus(state.detailedOffer);
        }
        state.nearbyOffers = state.nearbyOffers.map(resetFavoriteStatus);
      });
  }
});

export const { changeCity } = offersSlice.actions;
