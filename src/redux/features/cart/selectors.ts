import { RootState } from 'redux/store';

export const selectCount = (state: RootState) => {
    return state.cart.selectedItems.reduce((acc, item) => {
        return acc + item.count;
    }, 0);
};
export const selectSelectedItems = (state: RootState) => state.cart.selectedItems;
