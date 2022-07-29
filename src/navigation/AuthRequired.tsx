import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router';
import ROUTES from './routes';

interface Props {
    children: ReactElement;
}

const AuthRequired: React.FC<Props> = ({ children }) => {
    const location = useLocation();
    const isLoggedIn = false;

    return isLoggedIn ? (
        children
    ) : (
        <Navigate to={ROUTES.LOGIN} replace state={{ path: location.pathname }} />
    );
};

export default AuthRequired;
