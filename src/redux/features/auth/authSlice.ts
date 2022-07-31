import { createSlice } from '@reduxjs/toolkit';
import { loginAsync } from './async';
import { AuthState } from './types';

const initialState: AuthState = {
    status: 'idle',
    error: '',
    isAuthorized: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state) => {
                state.status = 'idle';
                state.isAuthorized = true;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'failed';

                if (action.payload) {
                    state.error = action.payload.errorMessage;
                }
            });
    },
});

export default authSlice.reducer;
