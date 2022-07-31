import { RootState } from 'redux/store';

export const selectProductsList = (state: RootState) => state.products.list;
