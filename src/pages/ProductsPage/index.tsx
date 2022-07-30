import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from 'components/common/Layout';
import Card from 'components/common/Card';
import ProductCard from 'components/products/ProductCard';
import { Product } from '@types';

import { LocationState } from './types';
import { ProductList } from './styles';

const ProductsPage = () => {
    const location = useLocation() as LocationState;
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (location.state?.category) {
            fetch(`https://fakestoreapi.com/products/category/${ location.state.category }`)
                .then(res => res.json())
                .then(json => setProducts(json));
        }
    }, []);
    return (
        <Layout>
            <Card>
                <h1>Products</h1>
                <ProductList>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </ProductList>
            </Card>
        </Layout>
    );
};

export default ProductsPage;
