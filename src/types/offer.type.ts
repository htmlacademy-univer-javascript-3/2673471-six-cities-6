import {HousingType} from './housing.type';
import {CityType} from './city.type.ts';

export type OfferType = {
  id: string;
  images: string[];
  title: string;
  description: string;
  isPremium: boolean;
  housingType: HousingType;
  rating: number;
  bedrooms: number;
  maxGuests: number;
  price: number;
  comforts: string[];
  owner: Owner;
  isFavorite: boolean;
  commentsCount: number;
  city: CityType;
};

type Owner = {
  avatarAuthor: string;
  nameAuthor: string;
  isPro: boolean;
};
