import {HousingType} from './housing.type';
import {CityType} from './city.type.ts';
import {Location} from './location.type.ts';

export type OfferType = {
  id: string;
  previewImage: string;
  images?: string[];
  title: string;
  description?: string;
  isPremium: boolean;
  type: HousingType;
  rating: number;
  bedrooms?: number;
  maxAdults?: number;
  price: number;
  goods?: string[];
  host?: Owner;
  isFavorite: boolean;
  commentsCount?: number;
  city: CityType;
  location: Location;
};

type Owner = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
};
