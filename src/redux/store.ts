import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'redux/features/cart/cartSlice';
import productsReducer from 'redux/features/products/productsSlice';
import categoriesReducer from 'redux/features/categories/categoriesSlice';
import authReducer from 'redux/features/auth/authSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        categories: categoriesReducer,
        auth: authReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
