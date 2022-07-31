import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from 'components/common/Layout';
import Card from 'components/common/Card';
import Header from 'components/common/Header';
import ProductCard from 'components/products/ProductCard';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchProductsAsync } from 'redux/features/products/async';
import { selectProductsList } from 'redux/features/products/selectors';

import { LocationState } from './types';
import { ProductList } from './styles';

const ProductsPage = () => {
    const location = useLocation() as LocationState;
    const products = useAppSelector(selectProductsList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (location.state?.category) {
            dispatch(fetchProductsAsync(location.state.category));
        }
    }, []);
    return (
        <Layout>
            <Card>
                <Header title="Products" />
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
