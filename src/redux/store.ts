import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from 'redux/features/cart/slice';
import productsReducer from 'redux/features/products/slice';
import categoriesReducer from 'redux/features/categories/slice';

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
