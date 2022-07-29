import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './routes';
import AuthRequired from './AuthRequired';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

const RootPage = () => {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route
                path={ROUTES.PRODUCTS}
                element={
                    <AuthRequired>
                        <ProductsPage />
                    </AuthRequired>
                }
            />
        </Routes>
    );
};

export default RootPage;
