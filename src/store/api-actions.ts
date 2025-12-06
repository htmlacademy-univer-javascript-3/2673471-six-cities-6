import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.ts';
import {OfferType} from '../types/offer.type.ts';
import {ApiRoute, AppRoute, AuthorizationStatus,} from '../const.ts';
import {ReviewType} from '../types/review.type.ts';
import {AuthData} from '../types/auth-data.ts';
import {AuthInfo} from '../types/auth-info.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {PostReviewData} from '../types/post-review-data.ts';
import {redirectToRoute} from './action.ts';
import {FavoriteStatusData} from '../types/favorite-status-data.ts';

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(ApiRoute.Offers);
    return data;
  },
);

export const fetchDetailedOfferAction = createAsyncThunk<OfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'offers/fetchDetailedOffer',
  async (offerId, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<OfferType>(`${ApiRoute.Offers}/${offerId}`);
      return data;
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return rejectWithValue((error as AxiosError).message);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${ApiRoute.Reviews}/${offerId}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<OfferType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    return data.slice(0, 3);
  },
);

export const checkAuthAction = createAsyncThunk<AuthInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<AuthInfo>(ApiRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<AuthInfo, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<AuthInfo>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  },
);

export const postReviewAction = createAsyncThunk<ReviewType, PostReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'reviews/postReview',
  async ({offerId, comment, rating}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<ReviewType>(`${ApiRoute.Reviews}/${offerId}`, {comment, rating});
      return data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(ApiRoute.Favorites);
    return data;
  },
);

export const postFavoriteAction = createAsyncThunk<OfferType, FavoriteStatusData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/postFavorite',
  async ({offerId, status}, {dispatch, getState, extra: api}) => {
    if (getState().USER.authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
      throw new Error('Access deny');
    }
    const {data} = await api.post<OfferType>(`${ApiRoute.Favorites}/${offerId}/${status}`, {offerId, status});
    return data;
  }
);
