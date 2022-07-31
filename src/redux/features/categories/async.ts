import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetch',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data: string[] = await response.json();

        return data;
    }
);
