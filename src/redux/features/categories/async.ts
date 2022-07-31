import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'server/axiosInstance';
import { CATEGORIES_ROUTE } from 'server/constants';
import { KnownError } from '@types';

export const fetchCategoriesAsync = createAsyncThunk<string[]>(
    'categories/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get(CATEGORIES_ROUTE);

            if (response.status !== 200) {
                return thunkAPI.rejectWithValue(response.data as KnownError);
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error as KnownError);
        }
    }
);
