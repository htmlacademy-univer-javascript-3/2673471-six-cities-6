import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.ts';
import {OfferType} from '../types/offer.type.ts';
import {setAllOffers, setReviews, setDetailedOffer, setLoadingStatus, setNearbyOffers} from './action.ts';
import {ApiRoute} from '../const.ts';
import {ReviewType} from '../types/review.type.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(ApiRoute.Offers);
    dispatch(setLoadingStatus(false));
    dispatch(setAllOffers({offers: data}));
  },
);

export const fetchDetailedOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchDetailedOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType>(`${ApiRoute.Offers}/${offerId}`);
    dispatch(setDetailedOffer(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${ApiRoute.Reviews}/${offerId}`);
    dispatch(setReviews({reviews: data}));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearbyOffers({offers: data}));
  },
);
