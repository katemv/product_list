import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesAsync } from './async';
import { CategoriesState } from './types';

const initialState: CategoriesState = {
    status: 'idle',
    list: []
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.list = action.payload;
            })
            .addCase(fetchCategoriesAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default categoriesSlice.reducer;
