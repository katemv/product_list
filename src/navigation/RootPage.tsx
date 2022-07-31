import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import ProductsPage from 'pages/ProductsPage';
import CategoriesPage from 'pages/CategoriesPage';
import AuthProvider from './AuthProvider';
import ROUTES from './routes';

const RootPage = () => (
    <AuthProvider>
        <Routes>
            <Route
                path={ROUTES.LOGIN}
                element={<LoginPage />}
            />
            <Route
                path={ROUTES.PRODUCTS}
                element={<ProductsPage />}
            />
            <Route
                path={ROUTES.CATEGORIES}
                element={<CategoriesPage />}
            />
            <Route
                path='*'
                element={<Navigate to={ROUTES.CATEGORIES} replace />}
            />
        </Routes>
    </AuthProvider>
);

export default RootPage;
