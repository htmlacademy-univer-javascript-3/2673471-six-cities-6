import {ReviewType} from '../../types/review.type.ts';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import {AuthorizationStatus} from '../../const.ts';
import {memo} from "react";

type ListReviewsProps = {
  reviews: ReviewType[];
  offerId: string;
  authorizationStatus: AuthorizationStatus;
}

function ListReviews({ reviews, offerId, authorizationStatus }: ListReviewsProps) {
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

export default memo(ListReviews);
