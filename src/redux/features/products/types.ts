import { Product } from '@types';

export interface ProductsState {
    status: 'idle' | 'loading' | 'failed';
    list: Product[];
}
