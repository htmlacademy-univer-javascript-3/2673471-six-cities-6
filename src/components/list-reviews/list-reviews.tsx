import {ReviewType} from '../../types/review.type.ts';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const.ts';

type ListReviewsProps = {
  reviews: ReviewType[];
  offerId: string;
}

export default function ListReviews({ reviews, offerId }: ListReviewsProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
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
      {
        authorizationStatus === AuthorizationStatus.Auth && <ReviewForm offerId={offerId}/>
      }
    </section>
  );
}
