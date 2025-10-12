export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Settings = {
  OffersCount: 3,
  AuthorizationStatus: AuthorizationStatus.Auth
};
