import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from 'redux/features/cart/cartSlice';
import productsReducer from 'redux/features/products/productsSlice';
import categoriesReducer from 'redux/features/categories/categoriesSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        categories: categoriesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
