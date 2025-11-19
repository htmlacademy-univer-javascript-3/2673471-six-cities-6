import {offers} from './mocks/offers.ts';
import {CityEnum} from './types/city.enum.ts';
import {OfferType} from './types/offerType.ts';

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

export function getStars(rating: number): number {
  return Math.round(rating) * 100 / 5;
}

export function getOffersByCity(city: CityEnum): OfferType[] {
  return offers.filter((offer) => offer.city.cityName === city);
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
