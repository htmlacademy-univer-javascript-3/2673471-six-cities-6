import {Offer} from '../types/offer.ts';
import {HousingType} from '../types/housing.type.ts';
import {City} from '../types/city.enum.ts';

export const offers: Offer[] = [
  {
    id: '1',
    city: City.Amsterdam,
    images: [
      'img/apartment-01.jpg',
      '/img/room-02.jpg;',
      '/img/room-03.jpg;',
      '/img/room-04.jpg;',
      '/img/room-05.jpg;',
      '/img/room-06.jpg'
    ],
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: 'Cozy and modern apartment in the heart of the city with great views.',
    isPremium: true,
    housingType: HousingType.Apartment,
    rating: 4.8,
    bedrooms: 2,
    maxGuests: 4,
    price: 120,
    comforts: ['Wi-Fi', 'Kitchen', 'Air conditioning', 'Washer'],
    owner: {
      avatarAuthor: 'img/avatar-max.jpg',
      nameAuthor: 'Roma Yurashov',
      isPro: true
    },
    isFavorite: true,
    commentsCount: 1
  },
  {
    id: '2',
    city: City.Amsterdam,
    images: [
      'img/room.jpg',
      '/img/room-03.jpg;',
      '/img/room-04.jpg;',
      '/img/room-05.jpg;',
      '/img/room-06.jpg;',
      '/img/room-07.jpg'
    ],
    title: 'Wood and stone place',
    description: 'Peaceful wooden cottage surrounded by nature, perfect for a weekend getaway.',
    isPremium: false,
    housingType: HousingType.Room,
    rating: 4.5,
    bedrooms: 3,
    maxGuests: 4,
    price: 80,
    comforts: ['Fireplace', 'Garden', 'BBQ', 'Free parking'],
    owner: {
      avatarAuthor: 'img/avatar-max.jpg',
      nameAuthor: 'Mamin Andrey',
      isPro: false
    },
    isFavorite: true,
    commentsCount: 1
  },
  {
    id: '3',
    city: City.Amsterdam,
    images: [
      'img/apartment-02.jpg',
      '/img/room-04.jpg',
      '/img/room-05.jpg',
      '/img/room-06.jpg',
      '/img/room-07.jpg',
      '/img/room-08.jpg',
    ],
    title: 'Canal View Prinsengracht',
    description: 'Stunning penthouse on the top floor with panoramic ocean views and private terrace.',
    isPremium: false,
    housingType: HousingType.Apartment,
    rating: 4.9,
    bedrooms: 5,
    maxGuests: 7,
    price: 132,
    comforts: ['Pool', 'Gym', 'Spa', 'Concierge', 'Wi-Fi', 'Smart TV'],
    owner: {
      avatarAuthor: 'owner3.jpg',
      nameAuthor: 'Professario Daniel',
      isPro: true
    },
    isFavorite: false,
    commentsCount: 1
  },
  {
    id: '4',
    city: City.Amsterdam,
    images: [
      'img/apartment-03.jpg',
      '/img/room-05.jpg',
      '/img/room-06.jpg',
      '/img/room-07.jpg',
      '/img/room-08.jpg',
      '/img/room-09.jpg',
    ],
    title: 'Nice, cozy, warm big bed apartment',
    description: 'Compact and stylish room located in a quiet historic neighborhood.',
    isPremium: true,
    housingType: HousingType.Apartment,
    rating: 4.3,
    bedrooms: 1,
    maxGuests: 2,
    price: 180,
    comforts: ['Wi-Fi', 'Kitchenette', 'Heating'],
    owner: {
      avatarAuthor: 'img/avatar-angelina.jpg',
      nameAuthor: 'Rocky Balboa',
      isPro: false
    },
    isFavorite: false,
    commentsCount: 1
  }
];
