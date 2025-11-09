import { ReviewType } from '../../types/review.type.ts';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';

type ListReviewsProps = {
  reviews: ReviewType[];
}

export default function ListReviews({ reviews }: ListReviewsProps) {
  return (
    <section className='offer__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews &middot; <span className='reviews__amount'>{reviews.length}</span>
      </h2>
      <ul className='reviews__list'>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}
