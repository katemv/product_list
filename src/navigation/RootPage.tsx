import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import ProductsPage from 'pages/ProductsPage';
import CategoriesPage from 'pages/CategoriesPage';
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
            <Route
                path={ROUTES.CATEGORIES}
                element={
                    <AuthRequired>
                        <CategoriesPage />
                    </AuthRequired>
                }
            />
            <Route
                path="*"
                element={
                    <Navigate to={ROUTES.CATEGORIES} replace />
                }
            />
        </Routes>
    );
};

export default RootPage;
