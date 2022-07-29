import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import ProductsPage from 'pages/ProductsPage';
import ROUTES from './routes';
import AuthRequired from './AuthRequired';

const RootPage = () => {
    return (
        <Routes>
            <Route
                path={ROUTES.LOGIN}
                element={<LoginPage />}
            />
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
