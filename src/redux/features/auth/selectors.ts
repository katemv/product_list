import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { AuthState } from './types';

const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthorized = createSelector(selectAuthState, (state: AuthState) => {
    return state.isAuthorized;
});

export const selectSelectedItems = (state: RootState) => state.cart.selectedItems;
