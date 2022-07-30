interface Rating {
    rate: number;
    count: 400;
}

export interface Product {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
}
