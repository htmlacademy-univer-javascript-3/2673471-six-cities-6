import {OfferType} from './offer.type.ts';

export type FavoriteStatusData = {
  offerId: OfferType['id'];
  status: 0 | 1;
}
