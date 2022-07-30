import React, { useEffect, useState } from 'react';
import ROUTES from 'navigation/routes';
import Layout from 'components/common/Layout';
import Card from 'components/common/Card';
import { CategoriesList, CategoryLink } from './styles';

const CategoriesPage = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json));
    }, []);

    return (
        <Layout>
            <Card>
                <h1>Categories</h1>
                <CategoriesList>
                    {categories.map((category) => (
                        <li key={category}>
                            <CategoryLink
                                to={ROUTES.PRODUCTS}
                                state={{ category }}
                            >
                                { category }
                            </CategoryLink>
                        </li>
                    ))}
                </CategoriesList>
            </Card>
        </Layout>
    );
};

export default CategoriesPage;
