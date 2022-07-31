import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@types';

export const fetchProductsAsync = createAsyncThunk(
    'products/fetch',
    async (category: string) => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${ category }`);
        const data: Product[] = await response.json();

        return data;
    }
);
