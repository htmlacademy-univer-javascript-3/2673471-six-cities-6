import {NameSpace} from "../../const.ts";
import {State} from "../../types/state.ts";
import {createSelector} from "@reduxjs/toolkit";

const getUserState = (state: State) => state[NameSpace.User];

export const getAuthorizationStatus = createSelector(getUserState, state => state.authorizationStatus);
export const getUserData = createSelector(getUserState, (state) => state.userData);
