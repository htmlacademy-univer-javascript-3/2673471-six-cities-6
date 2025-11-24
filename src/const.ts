import {OFFERS} from './mocks/offers.ts';
import {CityEnum} from './types/city.enum.ts';
import {OfferType} from './types/offer.type.ts';
import {SortOption, SortOptionType} from './types/sortOption.type.ts';

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

export const favorites = OFFERS.filter((offer) => offer.isFavorite);

export function getStars(rating: number): number {
  return Math.round(rating) * 100 / 5;
}

export function getOffersByCity(city: CityEnum): OfferType[] {
  return OFFERS.filter((offer) => offer.city.cityName === city);
}

export function sortOffersByOption(offers: OfferType[], sortOption: SortOptionType): OfferType[] {
  const sortedOffers = [...offers];
  switch (sortOption) {
    case SortOption.PriceHighToLow:
      return sortedOffers.sort((a, b) => b.price - a.price);
    case SortOption.PriceLowToHigh:
      return sortedOffers.sort((a, b) => a.price - b.price);
    case SortOption.TopRatedFirst:
      return sortedOffers.sort((a, b) => b.rating - a.rating);
    case SortOption.Popular:
    default:
      return offers;
  }
}

export const URL_MARKER_DEFAULT = 'public/img/pin.svg';

export const URL_MARKER_CURRENT = 'public/img/pin-active.svg';
