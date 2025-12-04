import {NameSpace} from "../const.ts";
import {userSlice} from "./user/user.ts";
import {offersSlice} from "./offers/offers.ts";
import {combineReducers} from "@reduxjs/toolkit";
import { reviewsSlice } from "./reviews/reviews.ts";
import {favoritesSlice} from "./favorites/favorites.ts";

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Favorites]: favoritesSlice.reducer,
})
