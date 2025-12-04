import { State } from "../../types/state";
import {NameSpace} from "../../const.ts";
import {createSelector} from "@reduxjs/toolkit";

const getReviewsState = (state: State) => state[NameSpace.Reviews];
export const getReviews = createSelector(getReviewsState, state => state.reviews);
