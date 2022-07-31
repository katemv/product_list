import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from './types';
import { fetchProductsAsync } from './async';

const initialState: ProductsState = {
    status: 'idle',
    list: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.list = action.payload;
            })
            .addCase(fetchProductsAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default productsSlice.reducer;
