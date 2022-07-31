import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, SelectedItem, UpdateSelectedItemsPayload } from './types';

const initialState: CartState = {
    selectedItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<UpdateSelectedItemsPayload>) => {
            const matchItem = (item: SelectedItem) => {
                return item.category === action.payload.category && item.id === action.payload.id;
            };
            
            const itemAdded = !!state.selectedItems.find((item) => matchItem(item));
            
            if (itemAdded) {
                state.selectedItems = state.selectedItems.map((item) => {
                    if (matchItem(item)) {
                        return ({
                            ...item,
                            count: item.count + 1,  
                        });
                    }

                    return item;
                });
            } else {
                state.selectedItems.push({
                    ...action.payload,
                    count: 1,
                });
            }
        },
        decrement: (state, action: PayloadAction<UpdateSelectedItemsPayload>) => {
            const matchItem = (item: SelectedItem) => {
                return item.category === action.payload.category && item.id === action.payload.id;
            };

            state.selectedItems = state.selectedItems.map((item) => {
                if (matchItem(item)) {
                    if (item.count === 0) {
                        return item;
                    }

                    return ({
                        ...item,
                        count: item.count - 1,
                    });
                }

                return item;
            });
        },
    },

});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
