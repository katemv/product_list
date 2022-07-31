import { createAsyncThunk } from '@reduxjs/toolkit';
import { KnownError, Product } from '@types';
import axiosInstance from 'server/axiosInstance';
import { PRODUCTS_ROUTE } from 'server/constants';

export const fetchProductsAsync = createAsyncThunk<Product[], string>(
    'products/fetch',
    async (category, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`${ PRODUCTS_ROUTE }/${ category }`);

            if (response.status !== 200) {
                return thunkAPI.rejectWithValue(response.data as KnownError);
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error as KnownError);
        }
    }
);
