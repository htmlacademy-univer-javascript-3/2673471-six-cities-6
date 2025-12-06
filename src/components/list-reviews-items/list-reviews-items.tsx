import Review from '../review/review.tsx';
import {ReviewType} from '../../types/review.type.ts';

type ListReviewsItemsProps = {
  reviews: ReviewType[];
}
export default function ListReviewsItems({reviews}: ListReviewsItemsProps) {
  return (
    <ul className='reviews__list'>
      {reviews.map((review) => (<Review key={review.id} review={review} />))}
    </ul>);
}
