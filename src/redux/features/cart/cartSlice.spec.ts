import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from 'redux/features/categories/categoriesSlice';
import { productsSlice } from 'redux/features/products/productsSlice';
import { increment, decrement, cartSlice } from './cartSlice';
import { selectCount } from './selectors';
import { CartState } from './types';

describe('cart reducer', () => {
    const initialState: CartState = {
        selectedItems: [{ category: 'electronics', id: 1, count: 1 }],
    };

    const initialStateCountZero: CartState = {
        selectedItems: [{ category: 'electronics', id: 1, count: 0 }],
    };

    it('should handle initial state', () => {
        expect(cartSlice.reducer(undefined, { type: 'unknown' })).toEqual({
            selectedItems: [],
        });
    });
    
    describe('increment', () => {
        it('should handle increment item id 1 in same category', () => {
            const actual = cartSlice.reducer(initialState, increment({ category: 'electronics', id: 1 }));
            expect(actual.selectedItems).toEqual([{ category: 'electronics', id: 1, count: 2 }]);
        });

        it('should handle increment item id 2 in same category', () => {
            const actual = cartSlice.reducer(initialState, increment({ category: 'electronics', id: 2 }));
            expect(actual.selectedItems).toEqual([
                { category: 'electronics', id: 1, count: 1 },
                { category: 'electronics', id: 2, count: 1 }
            ]);
        });

        it('should handle increment item in new category', () => {
            const actual = cartSlice.reducer(initialState, increment({ category: 'jewellery', id: 1 }));
            expect(actual.selectedItems).toEqual([
                { category: 'electronics', id: 1, count: 1 },
                { category: 'jewellery', id: 1, count: 1 }
            ]);
        });
    });

    describe('decrement', () => {
        it('should handle decrement item', () => {
            const actual = cartSlice.reducer(initialState, decrement({ category: 'electronics', id: 1 }));
            expect(actual.selectedItems).toEqual([{ category: 'electronics', id: 1, count: 0 }]);
        });

        it('should handle decrement item with count 0', () => {
            const actual = cartSlice.reducer(initialStateCountZero, decrement({ category: 'electronics', id: 1 }));
            expect(actual.selectedItems).toEqual([{ category: 'electronics', id: 1, count: 0 }]);
        });
    });
});

describe('cart selectors', () => {
    const store = configureStore({
        reducer: {
            categories: categoriesSlice.reducer,
            cart: cartSlice.reducer,
            products: productsSlice.reducer
        }
    });

    const initialState = store.getState();

    describe('selectCount', () => {
        it('should return 0 with am empty cart', () => {
            const result = selectCount(initialState);
            expect(result).toEqual(0);
        });

        it('should add up the totals', () => {
            const stateWithTotals = {
                ...initialState,
                cart: {
                    ...initialState.cart,
                    selectedItems: [
                        { category: 'electronics', id: 1, count: 1 },
                        { category: 'yewellery', id: 1, count: 2 }
                    ],
                }
            };

            const result = selectCount(stateWithTotals);

            expect(result).toEqual(3);
        });
    });
});
