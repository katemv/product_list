import { RootState } from 'redux/store';

export const selectCategoriesList = (state: RootState) => state.categories.list;
