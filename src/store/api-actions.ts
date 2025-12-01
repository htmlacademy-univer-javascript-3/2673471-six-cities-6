import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state.ts';
import {OfferType} from '../types/offer.type.ts';
import {
  setAllOffers,
  setReviews,
  setDetailedOffer,
  setLoadingStatus,
  setNearbyOffers,
  requireAuthorization, setUserData, redirectToRoute
} from './action.ts';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const.ts';
import {ReviewType} from '../types/review.type.ts';
import {AuthData} from '../types/auth-data.ts';
import {AuthInfo} from '../types/auth-info.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {PostReviewData} from '../types/post-review-data.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
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
  'data/fetchDetailedOffer',
  async (offerId, {dispatch, extra: api}) => {
    // try { в след задании хотел поправить
    const {data} = await api.get<OfferType>(`${ApiRoute.Offers}/${offerId}`);
    dispatch(setDetailedOffer(data));
    //} catch (error) {
    //}
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',

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
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearbyOffers({offers: data}));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<AuthInfo>(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<AuthInfo>(ApiRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUserData(null));
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserData(null));
  },
);

export const postReviewAction = createAsyncThunk<ReviewType, PostReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'data/postReview',
  async ({offerId, comment, rating}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<ReviewType>(`${ApiRoute.Reviews}/${offerId}`, {comment, rating});
      return data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  },
);
