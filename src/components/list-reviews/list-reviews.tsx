import {memo} from 'react';
import {ReviewType} from '../../types/review.type.ts';
import ReviewForm from '../review-form/review-form';
import {AuthorizationStatus} from '../../const.ts';
import ListReviewsItems from '../list-reviews-items/list-reviews-items.tsx';

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
      <ListReviewsItems reviews={reviews} />
      {
        authorizationStatus === AuthorizationStatus.Auth && <ReviewForm offerId={offerId}/>
      }
    </section>
  );
}

export default memo(ListReviews);
