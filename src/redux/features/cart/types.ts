export interface SelectedItem {
    id: number;
    category: string;
    count: number;
}

export interface UpdateSelectedItemsPayload {
    id: number;
    category: string;
}

export interface CartState {
    selectedItems: SelectedItem[];
}
