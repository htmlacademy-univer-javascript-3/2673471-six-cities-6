import {createSlice} from '@reduxjs/toolkit';
import {ReviewType} from '../../types/review.type.ts';
import {fetchReviewsAction, postReviewAction} from '../api-actions.ts';
import {NameSpace} from '../../const.ts';

type ReviewsState = {
  reviews: ReviewType[];
}

const initialState: ReviewsState = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload
          .slice()
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 10);
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = [...state.reviews, action.payload]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 10);
      });
  }
});
