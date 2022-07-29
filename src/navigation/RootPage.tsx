import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './routes';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

const RootPage = () => {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
        </Routes>
    );
};

export default RootPage;
