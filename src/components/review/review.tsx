import {memo, useMemo} from 'react';
import { ReviewType } from '../../types/review.type.ts';
import { getStars } from '../../const.ts';

type ReviewProps = {
  review: ReviewType;
}

function Review({ review }: ReviewProps) {
  const formattedDate = useMemo(() => {
    const date = new Date(review.date);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }, [review.date]);

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={review.user.avatarUrl}
            width='54'
            height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{review.user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${getStars(review.rating)}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{review.comment}</p>
        <time className='reviews__time'>{formattedDate}</time>
      </div>
    </li>
  );
}

export default memo(Review);
