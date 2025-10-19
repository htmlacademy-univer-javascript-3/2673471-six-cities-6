import {HousingType} from './housing.type';
import {City} from './city.enum.ts';

export type Offer = {
  id: string;
  city: City;
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
};

type Owner = {
  avatarAuthor: string;
  nameAuthor: string;
  isPro: boolean;
};
