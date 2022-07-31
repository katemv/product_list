export interface CategoriesState {
    status: 'idle' | 'loading' | 'failed';
    list: string[];
}
