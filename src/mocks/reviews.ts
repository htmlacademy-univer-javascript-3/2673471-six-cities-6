import {Review} from '../types/review.ts';

export const reviews: Review[] = [
  {
    id: 1,
    offerId: '3',
    authorAvatar: 'user1.jpg',
    authorName: 'Emily Parker',
    rating: 5,
    postDate: 'April 2023',
    text: 'Absolutely loved this place! The view was breathtaking and the host was very responsive. Would definitely stay again.'
  },
  {
    id: 2,
    offerId: '1',
    authorAvatar: 'user2.jpg',
    authorName: 'James Wilson',
    rating: 4,
    postDate: 'August 2024',
    text: 'Great location and clean apartment. Only minor issue was the noisy street, but that’s not the host’s fault.'
  },
  {
    id: 3,
    offerId: '2',
    authorAvatar: 'user3.jpg',
    authorName: 'Sophie Martin',
    rating: 5,
    postDate: 'January 2025',
    text: 'The cottage was perfect for our winter getaway. Warm, cozy, and exactly as described. Highly recommend!'
  },
  {
    id: 4,
    offerId: '4',
    authorAvatar: 'user4.jpg',
    authorName: 'Liam Chen',
    rating: 4,
    postDate: 'October 2025',
    text: 'Nice studio in a quiet area. Everything was clean and functional. Good value for the price.'
  }
];
