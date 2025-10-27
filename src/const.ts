import {offers} from './mocks/offers.ts';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  Offer = '/offer',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Settings = {
  AuthorizationStatus: AuthorizationStatus.Auth
};

export const favorites = offers.filter((offer) => offer.isFavorite);
