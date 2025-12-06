import {createSlice} from '@reduxjs/toolkit';
import {OfferType} from '../../types/offer.type.ts';
import {NameSpace} from '../../const.ts';
import {fetchFavoritesAction, logoutAction, postFavoriteAction} from '../api-actions.ts';

type FavoritesState = {
  favoriteOffers: OfferType[];
  isFavoritesLoading: boolean;
}

const initialState: FavoritesState = {
  favoriteOffers: [],
  isFavoritesLoading: false,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoritesLoading = false;
        state.favoriteOffers = [];
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        if (updatedOffer.isFavorite) {
          state.favoriteOffers.push(updatedOffer);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== updatedOffer.id);
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favoriteOffers = [];
      });
  }
});
