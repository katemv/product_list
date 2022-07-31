import React, { useEffect } from 'react';
import ROUTES from 'navigation/routes';
import Layout from 'components/common/Layout';
import Card from 'components/common/Card';
import Header from 'components/common/Header';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectCategoriesList } from 'redux/features/categories/selectors';
import { fetchCategoriesAsync } from 'redux/features/categories/async';
import { CategoriesList, CategoryLink } from './styles';

const CategoriesPage = () => {
    const categories = useAppSelector(selectCategoriesList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Layout>
            <Card>
                <Header title="Categories" />
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
